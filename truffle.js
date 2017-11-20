var ethereumjsWallet = require('ethereumjs-wallet');
var ProviderEngine = require("web3-provider-engine");
var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");
var FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

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
        provider: function() {
            return createProvider('rinkeby');
        },
        gas: 6000000,
        gasPrice: 2000000000 // 20 Gwei
    },
    mainnet: {
        network_id: 1,
        provider: function() {
            return createProvider('mainnet');
        },
        gas: 6500000,
        gasPrice: 20000000000 // 20 Gwei
    },
  },
  migrations_directory: './migrations'
};

function createProvider(network) {
    var privateKey = getPrivateKey(network);
    var wallet = ethereumjsWallet.fromPrivateKey(new Buffer(privateKey, "hex"));
    var address = "0x" + wallet.getAddress().toString("hex");

// var providerUrl = "https://" + network +".infura.io";
    var providerUrl = "http://localhost:8545/";
    var engine = new ProviderEngine();

    engine.addProvider(new FilterSubprovider());
    engine.addProvider(new WalletSubprovider(wallet, {}));
    engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
    engine.start(); // Required by the provider engine.

    return engine;
}

function getPrivateKey(network){
    return require('fs').readFileSync(__dirname + "/../keystore/key_" + network, "utf8").trim();
}
