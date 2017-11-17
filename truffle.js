var ethereumjsWallet = require('ethereumjs-wallet');
var ProviderEngine = require("web3-provider-engine");

var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");
var FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

var privateKey = 'PUT HERE PRIVATE KEY';
var wallet = ethereumjsWallet.fromPrivateKey(new Buffer(privateKey, "hex"));
var address = "0x" + wallet.getAddress().toString("hex");

var providerUrl = "https://rinkeby.infura.io";
var engine = new ProviderEngine();

// filters
engine.addProvider(new FilterSubprovider());
engine.addProvider(new WalletSubprovider(wallet, {}));
engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
engine.start(); // Required by the provider engine.

module.exports = {
networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 4700000
    },
    rinkeby: {
        network_id: 64,
        provider: engine,
        gas: 6000000,
        gasPrice: 2000000000 // 20 Gwei
    },
    // mainnet: {
    //     network_id: 1,
    //     provider: new HDWalletProvider(getWallet('mainnet'),getPassphrase('mainnet'),'https://mainnet.chronobank.io/'),
    //     gas: 6500000,
    //     gasPrice: 20000000000 // 20 Gwei
    // },
  },
  migrations_directory: './migrations'
};

