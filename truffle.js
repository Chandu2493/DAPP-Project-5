// Allows us to use ES6 in our migrations and tests.
require("babel-register");
const HDWalletProvide = require("truffle-hdwallet-provider");

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

// module.exports = {
//   networks: {
//     ganache: {
//       host: '127.0.0.1',
//       port: 7545,
//       network_id: '*' // Match any network id
//     }
//   }
// }

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvide(
          "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat",
          "https://rinkeby.infura.io/v3/32c92a953def4986ae16c6a61d847dd1"
        );
      },
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000
    }
  }
};
