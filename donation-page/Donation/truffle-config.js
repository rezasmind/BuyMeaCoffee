require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {

networks: {

development: {

host: "127.0.0.1", // Localhost (default: none)

port: 8545, // Standard Ethereum port (default: none)

network_id: "*", // Any network (default: none)

},

rinkeby: {

provider: () =>

new HDWalletProvider(

process.env.MNEMONIC,

`https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`

),

network_id: 4, // Rinkeby's id

gas: 5500000, // Rinkeby has a lower block limit than mainnet

confirmations: 2, // # of confs to wait between deployments. (default: 0)

timeoutBlocks: 200, // # of blocks before a deployment times out (minimum/default: 50)

skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )

},

},

};
