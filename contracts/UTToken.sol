pragma solidity ^0.4.17;


import "zeppelin-solidity/contracts/token/StandardToken.sol";


contract UTToken is StandardToken {

  string public name;
  string public symbol;
  uint8 public decimals;

  function UTToken() {
    totalSupply = 10000000000000000;
    balances[msg.sender] = totalSupply;
    name = "United Traders Token";
    decimals = 8;
    symbol = "UTT";

    Transfer(msg.sender, msg.sender, totalSupply);
  }
}
