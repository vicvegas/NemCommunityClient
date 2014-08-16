package org.nem.deploy.appconfig;

import org.apache.commons.cli.Option;
import org.nem.core.connect.*;
import org.nem.core.deploy.*;
import org.nem.core.metadata.ApplicationMetaData;
import org.nem.core.node.NodeEndpoint;
import org.nem.core.serialization.AccountLookup;
import org.nem.core.time.TimeProvider;
import org.nem.deploy.NccConfigurationPolicy;
import org.nem.ncc.NccMain;
import org.nem.ncc.cache.*;
import org.nem.ncc.connector.*;
import org.nem.ncc.model.graph.GraphViewModelFactory;
import org.nem.ncc.services.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.wallet.storage.SecureWalletDescriptorFactory;
import org.springframework.context.annotation.*;

import java.io.File;
import java.util.Arrays;

/**
 * Class supplying Spring beans.
 */
@Configuration
public class NccAppConfig {
	private DefaultNisConnector connector;

	@Bean
	public SimpleNisConnector cloudConnector() {
		// work around a dependency loop
		// DefaultNisConnector -> accountCache -> accountServices -> DefaultNisConnector
		// not sure if there is a better way to deal with it
		if (null != this.connector) {
			return this.connector;
		}

		this.connector = new DefaultNisConnector(NodeEndpoint.fromHost("localhost"), this.httpMethodClient());
		this.connector.setAccountLookup(this.accountLookup());
		return this.connector;
	}

	private HttpMethodClient<ErrorResponseDeserializerUnion> httpMethodClient() {
		final int CONNECTION_TIMEOUT = 10000;
		final int SOCKET_TIMEOUT = 10000;
		final int REQUEST_TIMEOUT = 20000;
		return new HttpMethodClient<>(CONNECTION_TIMEOUT, SOCKET_TIMEOUT, REQUEST_TIMEOUT);
	}

	@Bean
	public NccMain nccMain() {
		return new NccMain();
	}

	@Bean
	public CommonStarter commonStarter() {
		return CommonStarter.INSTANCE;
	}

	@Bean
	public AccountServices accountServices() {
		return new AccountServices(this.cloudConnector());
	}

	@Bean
	public ChainServices chainServices() {
		return new ChainServices(this.cloudConnector(), this.networkServices());
	}

	@Bean
	public NetworkServices networkServices() {
		return new NetworkServices(this.cloudConnector());
	}

	@Bean
	public NodeServices nodeServices() {
		return new NodeServices(this.cloudConnector());
	}

	@Bean
	public org.nem.ncc.model.Configuration configuration() {
		return this.nccMain().getConfiguration();
	}

	@Bean
	public GraphViewModelFactory graphViewModelFactory() {
		return new GraphViewModelFactory();
	}

	@Bean
	public ApplicationMetaData applicationMetaData() {
		return CommonStarter.META_DATA;
	}

	@Bean
	public TimeProvider timeProvider() {
		return CommonStarter.TIME_PROVIDER;
	}

	@Bean
	public TransactionMapper transactionMapper() {
		return new TransactionMapper(
				this.walletServices(),
				this.accountCache(),
				this.timeProvider());
	}

	@Bean
	public WalletLocator walletLocator() {
		return new WalletFileLocator(this.getNemFolder());
	}

	@Bean
	public WalletMapper walletMapper() {
		return new WalletMapper(this.accountMapper(), this.timeProvider());
	}

	@Bean
	public AccountMapper accountMapper() {
		return new AccountMapper(this.configuration(), this.accountCache());
	}

	@Bean
	public AccountMetaDataPairLookup accountCache() {
		final int refreshInSeconds = 2;
		final NccAccountCache accountCache = new NccAccountCache(this.accountServices(),
				this.timeProvider(),
				refreshInSeconds);
		accountCache.seedAccounts(this.accountsFileRepository().load());
		return accountCache;
	}

	// since both this and bean above implement same interface,
	// we need to state this one is primary in case of a conflict...
	@Bean
	@Primary
	public AccountLookup accountLookup() {
		return new WalletAwareAccountLookup(this.accountCache(), this.walletServices());
	}

	@Bean
	public AccountsFileRepository accountsFileRepository() {
		final File file = new File(this.getNemFolder(), "accounts_cache.json");
		final AccountsFileDescriptor descriptor = new AccountsFileDescriptor(file);
		final AccountsFileRepository repository = new AccountsFileRepository(descriptor);
		repository.load();
		return repository;
	}

	@Bean
	public WalletServices walletServices() {
		final WalletRepository walletRepository = new AutoFallbackRepository(Arrays.asList(
				new BinaryWalletRepository(),
				new LegacyWalletRepository()));

		return new DefaultWalletServices(
				walletRepository,
				new SecureWalletDescriptorFactory(this.getNemFolder()));
	}

	@Bean
	public NemConfigurationPolicy configurationPolicy() {
		return new NccConfigurationPolicy();
	}

	@Bean
	public NemCommandLine nemCommandLine() {
		return new NemCommandLine(Arrays.asList(
				new Option(CommonConfiguration.NEM_FOLDER, true, CommonConfiguration.NEM_FOLDER_DESCRIPTION),
				new Option(CommonConfiguration.WEBSTART, true, CommonConfiguration.WEBSTART_DESCRIPTION),
				new Option(CommonConfiguration.NIS_JNLP_URL, true, CommonConfiguration.NIS_JNLP_URL_DESCRIPTION)));
	}

	private File getNemFolder() {
		return new File(this.configuration().getNemFolder());
	}
}
