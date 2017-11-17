const UTToken = artifacts.require(`./UTToken.sol`);

module.exports = deployer => {
  deployer.deploy(UTToken);
};
