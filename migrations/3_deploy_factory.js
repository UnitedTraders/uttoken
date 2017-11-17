const UTTokenFactory = artifacts.require(`./UTTokenFactory.sol`);

module.exports = deployer => {
    deployer.deploy(UTTokenFactory);
};

