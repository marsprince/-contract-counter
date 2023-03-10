pragma solidity ^0.8.0;

contract Counter {
  uint public count = 1;

  function get() public view returns (uint) {
    return count;
  }

  function inc() public {
    count += 1;
  }
  function dec() public {
    count -= 1;
  }
}
