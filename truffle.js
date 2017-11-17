var HDWalletProvider = require("truffle-hdwallet-provider");

function getWallet(network){
  return require('fs').readFileSync(__dirname + "/../keystore/wallet_" + network + ".json", "utf8").trim();
}

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
          return new HDWalletProvider(getWallet('rinkeby'), 'https://rinkeby.infura.io/');
        },
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
}
