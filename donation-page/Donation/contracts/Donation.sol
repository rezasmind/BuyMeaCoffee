pragma solidity ^0.5.16;

contract Donation {
    function donate() external payable {}

    function balanceOf() external view returns(uint) {
        return address(this).balance;
    }
}