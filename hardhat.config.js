require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  harmonytest: {
    url: "https://api.s0.b.hmny.io",
    accounts: [process.env.PRIVATEKEYS]
  },
  harmony: {
    url: "https://api.harmony.one",
    accounts: [process.env.PRIVATEKEYS]
  }
};
