package org.nem.ncc.wallet;

import org.junit.BeforeClass;
import org.nem.ncc.storable.entity.StorableEntityFileLocatorTest;
import org.nem.ncc.wallet.storage.WalletDescriptor;

import java.io.*;

public class WalletFileLocatorTest extends StorableEntityFileLocatorTest<
		WalletDescriptor,
		WalletFileLocator> {

	@BeforeClass
	public static void createTestFiles() throws IOException {
		createTestFiles(WalletFileExtension.getDefaultFileExtension().toString());
	}

	@Override
	protected WalletFileLocator createFileLocator(final File file) {
		return new WalletFileLocator(file);
	}
}