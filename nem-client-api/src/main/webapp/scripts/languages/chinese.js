define({
	id: 'cn',
	name: '中文（简体）',
	texts: {
		preferences: {
			thousandSeparator: ',',
			decimalSeparator: '.'
		},
		faults: {
			101: '未找到文件。',
			102: '尚未建立钱包。',
			103: '钱包文件已损坏。如果您的钱包存在备份，请使用备份恢复你的账户，或添加一个新账户。',
			104: '该密码不正确，请认真回忆密码，如该密码丢失将造成无法复原！',
			105: '未输入钱包密码。',
			106: '使用钱包需先正常开启，您必须提供正确密码才能打开钱包。',
			107: '钱包内无此账户。',
			108: '无法删除该账户。可能的原因是，该账户存在余额或该帐户是主帐户。',
			109: '具有相同名称的另一个钱包已经存在。请选择一个其它的钱包名。',
			110: '钱包里已经包含了此帐户。',
			111: '钱包名与目录名重名。',
			112: '钱包文件插件已损坏。',
			113: '无法删除钱包。',
			121: '地址簿文件不存在。',
			122: '地址簿尚未创建。',
			123: '地址簿文件已损坏，请从备份恢复地址簿。',
			124: '您提供的地址簿密码有误。',
			125: '未输入地址簿密码。',
			127: '地址簿中不含此地址。',
			128: 'The address provided is not valid.',
			129: '同名地址簿已存在，请选择一个新的地址簿名。',
			130: '地址簿中已包含此地址。',
			131: '地址簿名与目录重名。',
			132: '地址簿插件文件错误。',
			133: '此地址簿无法删除。',
			202: '该公钥不存在。',
			203: '账户无法转换，可能存在未激活的共同签署人账号。需要完成一笔交互以激活账户。',
			305: 'NEM基础设施服务 (NIS)不可用。\n\n请尝试重启NEM软件。\n\n如果您在使用远程NIS，请确认NIS端口开放，连接未受局域网限制。',
			306: '对不起，一个开发团队没有预见到的错误发生了。请尝试重试，若问题未解决，请在NEM NIS/NCC社区内提交该问题。',
			400: '缺失某些参数。',
			401: '抱歉，不允许执行该操作，本能地钱包登陆远程NIS存在私钥丢失风险！',
			404: '您请求的资源无法找到。',
			500: '保存配置文件失败。',
			600: 'NCC需要连接至已启用的NIS服务启动以从NEM云发送和接收交易数据，请使用NCC菜单项启动本地节点。',
			601: 'NIS节点已启用，无法重复启用。',
			602: 'NEM基础设施服务（NIS）当前正在加载数据，数据完全加载后钱包将可用。',
			699: '此服务器已达最大收获人数。',
			700: '所提供的帐户不满足收获的基本要求。主要原因可能是金额不足，账户中至少有1000 XEM才能开始收获。',
			701: '所提供的截止日期过早。必须输入1天以内的日期作为截止日期。',
			702: '所提供的截止日期过晚。必须输入1天以内的日期作为截止日期。',
			703: 'Your account does not have the right balance to make this transaction.',
			704: '提供消息的文本太大，无法通过XEM发送。请减少消息的长度。',
			705: '数据库或交易清单中已经存在此交易的hash值。',
			706: '无法验证本次交易的签名。',
			707: '此交易ID的时间戳不合法，时间过早。',
			708: '此交易ID的时间戳不合法，时间过晚。',
			709: '该帐户未知。一个帐户需要至少完成一个交易（作为发件人或收件人）才能被网络公知。',
			710: '交互缓存耗尽，交互被拒绝。网络繁忙时高手续费优先处理。 ',
			730: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			731: 'Delegated harvesting account has non zero balance and cannot be used.',
			732: '重要性传输被拒绝，已有等待中重要性传输操作。 ',
			733: 'Delegated harvesting is already active.',
			734: 'Delegated harvesting is NOT active. Cannot deactivate.',
			740: '多重签名账号不可发起交互。',
			741: '多重签名签名交互被拒绝。当前账户不是此多重签名交互的合法共同签署人账号。',
			742: '多重签名签名交互被拒绝。相关多重签名交互在NEM网络中未公知。',
			743: '多重签名账户变更被拒绝。一个待加入账号已是共同签署人。',
			901: '设置离线模式发生错误。',
			1000: '您所提供的密钥公钥与私钥不对应。',
			1001: '您所提供的公钥和地址不对应。',
			1002: '网络中无法找到改地址。'
		},
		common: {
			success: '成功',
			unknown: '未知状态',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC 状态未知',
				nccUnavailable: 'NCC 不可用',
				nccStarting: 'NCC 开始启用…',
				nisUnknown: 'NIS 状态未知',
				nisUnavailable: 'NIS 不可用',
				nisStarting: 'NIS 开始启用…',
				notBooted: '需要启用NIS。请打开你的钱包，通过弹出的对话框启用一个本地节点，或设置自动启用。',
				loading: '正在数据库中加载区块, 现区块号: ',
				booting: '正在启用 NIS...',
				nisInfoNotAvailable: '收不到NIS信息，正尝试接收NIS信息...',
				synchronizing: 'NIS 在和服务器执行同步. 现位于 {{1}}, 大约落后 {{2}} 。',
				daysBehind: {
					0: '少于一天',
					1: '一天',
					many: '{{1}} 天'
				},
				synchronized: 'NIS已完成同步!',
				noRemoteNisAvailable: '在相应地址未发现NIS网络，互联网已断开？'
			},
			addressBook: '地址簿',
			password: '密码',
			passwordValidation: '密码不可为空',
			address: '地址',
			privateLabel: '个人标签',
			publicLabel: '公共标签',
			noCharge: '当前账号<b>不会</b>支付相关费用，费用由多重签名账号支付。',
			fee: '费用',
			justUse: 'Just use',
			dueBy: '限期',
			hours: '小时数',
			hoursDue: '到期小时数',
			hoursDueExplanation: '如果交互未在截止时间之前完成，它会被拒绝。',
			closeButton: '关闭'
		},
		transactionTypes: [
			'传输交互',
			'重要性传输',
			'多重签名账户变更',
			'多重签名交互'
		],
		transactionDirections: {
			pending: '等待中交互',
			outgoing: '发送交互',
			incoming: '接受交互',
			self: '自我交互',
			importance: '重要性交互',
			modification: '多重签名账户协同变更'
		},
		modals: {
			error: {
				title: '哎呀!',
				caption: '错误 {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: '是',
				no: '否'
			},
			settings: {
				title: '设置',
				language: {
					label: '语言'
				},
				remoteServer: {
					tabTitle: '远程服务器',
					protocol: '协议',
					protocolOptions: {
						http: 'HTTP'
					},
					host: '主机名',
					port: '端口',
					defaultPort: '使用默认端口'
				},
				autoBoot: {
					tabTitle: '自动启用',
					name: '节点名',
					account: '帐户',
					primaryAccount: '主帐户',
					auto: '开启钱包时自动启用'
				},
				save: '保存',
				saveSuccess: '设置保存成功'
			},
			multisig: {
				title: '转换为多重签名账号',
				multisigAccount: '多重签名账号',
				cosignatories: '共同签署人地址',
				labelDesc: '账户标签为 {{1}}',
				nullLabelDesc: '该账户未设置标签',
				addCosignatory: '+ 添加共同签署人',
				cancel: '取消',
				convert: '转换',
				fee: '费用',
				feeValidation: '必须支付比最小值高的费用',
				useMinimumFee: '使用最小费用',
				txConfirm: {
					title: '确认转换至多重签名账户',
					total: '总额',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. Most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: '签署多重签名交互',
				original: {
					from: '多重签名账户',
					to: '接收人',
					amount: '量',
					fee: '内部费用',
					deadline: '期限'
				},
				multisigFees: '多重签名费用',
				multisigTotal: '总额',
				sender: '共同签署人',
				fee: '费用',
				feeValidation: '费用必须高于最小费用',
				useMinimumFee: '使用最小费用',
				password: '密码',
				passwordValidation: '密码不可为空',
				send: '发送',
				cancel: '取消',
				sending: '发送中...',
				successMessage: '交互已成功发出！',
				txConfirm: {
					title: '确认多重签名交互',
					message: '信息',
					encrypted: '信息已加密',
					noMessage: '无信息',

				}
			},
			sendNem: {
				title: '发送 XEM',
				sender: '发送人',
				thisAccount: '本账户',
				labelDesc: '此账户标记为 {{1}}',
				nullLabelDesc: '此帐户没有标记',
				amount: '金额',
				recipient: '收件人账号',
				recipientValidation: '账户地址长度必须为40个字符（含符号）',
				message: '信息',
				encrypt: '加密',
				fee: '费用',
				multisigFee: '多重签名费用',
				feeValidation: '无效费用值，必须填入等于或高于最小费用的值。',
				useMinimumFee: '支付最小费用',
				password: '密码',
				passwordValidation: '密码不可为空',
				send: '发送',
				cancel: '取消',
				sending: '正在发送...',
				successMessage: '交易发送成功!',
				txConfirm: {
					title: '确认交易',
					amount: '金额',
					to: '收件人',
					total: '总价',
					message: '信息',
					encrypted: '信息已加密',
					noMessage: '未发送信息',
					cancel: '取消',
					confirm: '确认',
					sending: '正在发送中...'
				},
				notBootedWarning: {
					title: '节点还没有启用!',
					message: '本地节点需要被启用后才能发送XEM!'
				},
				bootingWarning: {
					title: '正在启用节点',
					message: '请等待节点启用完成后再发起交互。'
				},
				loadingWarning: {
					title: '正在加载数据库'
				}
			},
			clientInfo: {
				title: '客户端信息',
				ncc: 'NEM 社区客户端 - NCC',
				signer: '签名者',
				remoteServer: '远程服务器',
				local: '本地',
				nis: 'NEM 基础设施服务器 - NIS',
				sync: '完成同步',
				notSync: '未完成同步',
				notConnected: '未连接 NEM 云',
				loading: '加载中...'
			},
			transactionDetails: {
				title: '交易详情',
				id: 'ID',
				hash: 'Hash',
				type: '交易类型',
				direction: '交互方向',
				pending: '待定',
				outgoing: '发送',
				incoming: '接收',
				self: '本人',
				sender: '发件人',
				multisigAccount: '多重签名账户',
				issuer: '发起人',
				recipient: '收件人',
				remote: '远程',
				multisigMessage: '已存签名',
				message: '信息',
				noMessage: '无信息',
				encrypted: '已加密',
				time: '时间戳',
				confirmations: '确认',
				confirmationsUnknown: '未知',
				amount: '金额',
				fee: '费用',
				innerFee: '内部费用',
				multisigFees: '多重签名费用',
				cosignatory: '共同签署人'
			},
			accountDetails: {
				title: '账户细节',
				address: '地址',
				label: '标签',
				noLabel: '无标签',
				add: '添加到地址簿',
				remove: '从地址簿删除',
				balance: '余额',
				vested: "vested",
				importance: '重要性',
				publicKey: '公钥',
				noPublicKey: '无公钥',
				harvestedBlocks: '已收获块',
				close: '关闭'
			},
			bootLocalNode: {
				title: '启用本地节点',
				account: '节点启用帐号',
				noLabel: '<span class=\'null\'>&lt;没有标识&gt;</span>',
				wallet: '钱包',
				node: '节点名称',
				boot: '启用',
				booting: '正在启用...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: '您确定要使用账户{{1}} ({{2}}） XEM 的私钥启用节点<u>{{3}}</u>?<br><br>这会对 <u>{{3}}</u>这台NIS暴露您的 <span class="sublabelWarning">私钥</span>。'
			},
			closeWallet: {
				title: '关闭钱包',
				message: '您确定要关闭钱包并返回到登陆页面?'
			},
			createAccount: {
				title: '创建新帐号',
				label: '标识',
				wallet: '钱包',
				password: '钱包的密码',
				successMessage: '帐号 {{1}} {{#2}}({{2}}){{/2}} 已创建!',
				create: '创建'
			},
			showPrivateKey: {
				title: '显示账户私钥',
				message: '该操作会将账户私钥明文显示在屏幕中，请谨慎操作。如果您的电脑中有病毒软件，私钥将有可能被盗。您确认这么做吗?',
				publicKey: '公钥',
				privateKey: '私钥',
				show: '显示私钥'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: '添加一个现有帐户',
				privateKey: '帐户的私钥',
				wallet: '钱包',
				password: '钱包的密码',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 已被添加到钱包!',
				add: '添加',
				label: '标识'
			},
			setPrimary: {
				title: '设置主账户',
				account: '帐户被设置为主账户',
				noLabel: '<span class=\'null\'>&lt;无标识&gt;</span>',
				wallet: '钱包',
				password: '钱包的密码',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 被设置为主账户!',
				set: '设置为主账户'
			},
			changeWalletName: {
				title: '修改钱包名',
				wallet: '当前钱包名',
				newName: '新钱包名',
				password: '钱包密码',
				successMessage: '钱包名称已成功从<em>{{1}}</em>变更为<em>{{2}}</em>',
				change: '修改'
			},
			changeWalletPassword: {
				title: '修改钱包密码',
				wallet: '钱包',
				password: '当前密码',
				newPassword: '新密码',
				confirmPassword: '确认新密码',
				successMessage: '钱包密码已经修改成功',
				change: '修改',
				passwordNotMatchTitle: '糟!',
				passwordNotMatchMessage: '您输入的密码不正确，请务必正确输入您的密码'
			},
			changeAccountLabel: {
				title: '更改帐户标识',
				label: '帐户标识',
				wallet: '帐户',
				password: '钱包密码',
				successMessage: '帐户{{1}}现在的标识是{{2}}',
				change: '修改'
			},
			removeAccount: {
				title: '删除帐户',
				account: '帐户',
				label: '帐户标识',
				wallet: '钱包',
				password: '钱包密码',
				warning: '在你删除帐户前请确保您的帐户无剩余MEM，一经删除余额将无法恢复',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 被删除了!',
				remove: '删除'
			},
			nisUnavailable: {
				title: 'NIS 不可用',
				message: 'NIS连接不可用。'
			},
			shutdown: {
				title: '关闭程序',
				message: '您确定要关闭NEM社区客户端?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: '钱包',
				account: '帐户',
				password: '钱包密码',
				activate: '激活',
				warning: 'Warning',
				warningText: '激活会花费6小时的时间 (360块)。激活操作并不会开启收获。'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: '钱包',
				account: '帐户',
				password: '钱包密码',
				deactivate: '停止激活',
				warning: '警告',
				warningText: '解除激活会花费6小时的时间 (360块)。'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: '钱包',
				account: '帐户',
				password: '钱包密码',
				start: '开始'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: '钱包',
				account: '帐户',
				password: '钱包密码',
				stop: '停止'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: '新增联系人',
				add: '新增'
			},
			editContact: {
				title: '编辑联系人',
				saveChanges: '保存修改'
			},
			removeContact: {
				title: '删除联系人',
				remove: '删除'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: '钱包已成功导入!',
			nav: {
				start: '已经 开始',
				about: '关于NEM',
				settings: '设置'
			},
			main: {
				leftTitle: '<em>NEM</em>新手?',
				leftButton: '创建新钱包',
				walletNamePlh: '您钱包的名称',
				passwordPlh: '密码',
				confirmPasswordPlh: '确认密码',
				create: '创建',
				creating: '创建中...',
				rightTitle: '已经是<em>NEM</em>用户?',
				rightButton: '打开您的钱包',
				openButton: '打开',
				walletsFound: '发现 <strong>{{1}}</strong> <em>钱包</em>',
				copyright: '由<em>Cas Cornelissen</em>摄制'
			},
			carousel: {
				items: [
					{
						title: 'NCC 加密你的钱包',
						description: '为避免XEM被盗，加密是<em>安全</em>的有效保证 &amp;。'
					},
					{
						title: 'NCC 加密你的钱包',
						description: ' 为避免XEM被盗，加密是<em>安全</em>的有效保证 &amp;。'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'NCC是如何工作的?',
						paragraphs: [
							'<strong>NCC</strong> 让您使用XEM时就如使用一个传统的钱包一样。',
							'<strong>NCC</strong>打开使用前需要您连接到<strong>NIS</strong> 服务器。 您可以本地同时安装<strong>NCC</strong>服务和<strong>NIS</strong>服务。',
							'也可以访问一个远程<strong>NIS</strong>。'
						],
						listItems: [
							'拥有多个钱包',
							'在一个钱包里定义多个帐户'
						]
					},
					{
						title: '什么是&#42;NIS?',
						paragraphs: [
							'负责保持<strong>NEM</strong>云存活.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> 是 <strong>NEM</strong> 云的接入点。'
						],
						legend: '<strong>&#42;NIS</strong> 是 <strong>NEM基础架构服务</strong>的缩写'
					}
				]
			},
			footer: {
				copyright: '&copy; 版权所有 2015. NEM 社区客户端。'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '大约 {{1}} 天前',
			lastAccessJustNow: '当前',
			lastAccessTooltip: '上次访问时间 {{1}}',
			primary: '主账户',
			primaryShort: 'P',
			noLabel: '<无标识>',
			copiedToClipboard: '已复制地址到剪贴板!',
			actions: {
				refreshInfo: '刷新信息',
				bootLocalNode: '启用本地节点',
				changeWalletName: '修改钱包名称',
				changeWalletPassword: '修改钱包密码',
				mergeWallets: '合并钱包',
				exportWallet: '输出钱包',
				createAccount: '创建新帐号',
				createRealAccountData: '创建真实账户信息',
				verifyRealAccountData: '确认真实账户信息',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: '添加一个现有帐户',
				changeAccountLabel: '更改帐户标识',
				setPrimary: '设为主帐户',
				removeAccount: '删除帐户',
				clientInfo: '客户信息',
				closeWallet: '关闭钱包',
				closeProgram: '关闭程序',
				copyClipboard: '复制地址至剪贴板',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'仪表板',
				'消息',
				'联系人',
				'交易',
				'收获的区块',
				'资产交换',
				'新闻',
				'应用',
				'帐户',
				'设置',
				'关闭程序'
			],
			bootNodeWarning: '启用本地节点后，才能充分使用NCC的功能。'
		},
		dashboard: {
			assets: {
				title: '你的资产'
			},
			importance: {
				title: '重要性',
				unknown: '未知状态',
				start: '开始收获',
				harvesting: '正在收获',
				stop: '停止收获',
				description: 'NEM帐户重要性(PoI)',
				remoteHarvest: {
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: '远程收获',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: '最近的交易',
				sendNem: '发送XEM',
				signMultisig: '签署',
				balance: '目前余额',
				loading: '加载中的余额',
				accountCosignatories: '多重签名账户',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: '账户当前余额',
				syncStatus: '(现区块{{1}}{{#2}} : 估计{{3}}落后{{/2}}天)',
				notSynced: 'NIS可能尚未完成同步。',
				unknown: '未知',
				columns: [
					'',
					'时间',
					'发送人/收件人',
					'信息',
					'',
					'细节',
					'确认',
					'费用',
					'金额'
				],
				noMessage: '无信息',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: '未知',
				pending: '待定',
				seeAll: '查看所有交易',
				noTransactions: '无交易'
			},
			nemValue: {
				title: 'XEM 价值统计'
			},
			messages: {
				titleTooltip: '留言'
			},
			news: {
				titleTooltip: '新闻'
			},
			notAvailable: 'beta版本尚未开放该功能'
		},
		transactions: {
			title: '交易',
			sendNem: '发送 XEM',
			balance: '目前余额',
			filters: {
				confirmed: '已确认交易',
				unconfirmed: '未确认交易',
				incoming: '接受中',
				outgoing: '发送中'
			},
			table: {
				columns: [
					'',
					'时间',
					'发送人/接收人',
					'留言',
					'',
					'细节',
					'确认',
					'费用',
					'金额'
				],
				noMessage: '无留言',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: '未知',
				pending: '待定中',
				noTransactions: '无交易',
				loading: '载入更多的交易...'
			}
		},
		harvestedBlocks: {
			title: '收获区块',
			feeEarned: '最新挖出的25个区块的报酬',
			unknown: '未知',
			table: {
				columns: [
					'高',
					'时间',
					'块难度',
					'费用'
				],
				noBlocks: '不存在已收获区块',
				loading: '查看更多'
			},
			harvesting: {
				unknown: '未知状态',
				start: '开始收获',
				harvesting: '正在收获',
				stop: '停止收获',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: '地址簿',
			addContact: '添加联系人',
			table: {
				columns: [
					'账户地址',
					'个人标签',
					'公共标签'
				],
				noContacts: '您的地址簿中无联系人'
			},
			noLabel: '无标签',
			sendNem: '发送XEM',
			edit: '编辑',
			remove: '删除'
		},
		settings: {
			title: '设置',
			settings: [
				{
					name: '语言'
				}
			],
			save: '保存更改',
			saveSuccess: '设置已保存成功'
		}
	}
});
