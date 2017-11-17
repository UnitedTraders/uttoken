pragma solidity ^0.4.17;


import "zeppelin-solidity/contracts/token/StandardToken.sol";


contract UTToken is StandardToken {

  string public name;
  string public symbol;
  uint8 public decimals;

  function UTToken(uint256 _initialAmount,
    string _tokenName,
    uint8 _decimalUnits,
    string _tokenSymbol
    ) {
    balances[msg.sender] = _initialAmount;
    totalSupply = _initialAmount;
    name = _tokenName;
    decimals = _decimalUnits;
    symbol = _tokenSymbol;
  }
}
