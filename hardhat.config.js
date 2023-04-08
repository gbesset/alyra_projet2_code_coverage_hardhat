require("@nomicfoundation/hardhat-toolbox");
require("solidity-coverage");
require("@nomiclabs/hardhat-truffle5");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: true
        }
      },
      viaIR : false,
    },
  },
};
