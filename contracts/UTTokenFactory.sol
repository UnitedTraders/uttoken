import "./UTToken.sol";

pragma solidity ^0.4.17;

contract UTTokenFactory {

    function UTTokenFactory() public {
        createToken(10000000000000000, "United Traders Token", 8, "UTT");
    }

    function createToken(uint256 _initialAmount, string _name, uint8 _decimals, string _symbol) public returns (address) {
        UTToken newToken = (new UTToken(_initialAmount, _name, _decimals, _symbol));
        newToken.transfer(msg.sender, _initialAmount); //the factory will own the created tokens. You must transfer them.
    }
}
