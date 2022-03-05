pragma solidity ^0.8.10;

contract Donation {
    uint public num = 2;

    function get() public view returns(uint) {
        return num;
    }
}