import React, { Component, useState, useEffect }  from "react";

import './App.css';

import Web3 from 'web3';

import { Donation } from './ABI/Donation'

const web3 = new Web3(Web3.givenProvider)

const contractAddress = "0x0bFA33486bc6e48B741b3641bC0B4F401Af1E84d"

const donationContract = new web3.eth.Contract(Donation, contractAddress)

function App() {
  const [storedValue,account] = useState(0,null)
  useEffect( async () => {
    const accounts = await window.ethereum.enable()
    const account = accounts[0]
    console.log(account)
  })

  const createTransaction =  () => {
    const amount = "0.0005"; 
    const amountToSend = web3.utils.toWei(amount, "ether");
    donationContract.methods.donate().send({ from: "0xDBe17e07A3203F2edbB4Fe4067AAc1a5FD5Ee591",value: amountToSend }).then(tx => {
      console.log(tx)
    })
  }

  const getBalance = async () => {
    let balance = await web3.eth.getBalance(donationContract.options.address)
    console.log(balance)
  }

  return (
    <div className="App">
      <h1>Donation</h1>
      <p> Choose the donation Amount: </p>
      <ul>
        <li value="1"><button> <img src="https://www.svgrepo.com/show/45669/coffee.svg" style={{maxWidth: "50px"}}/>  coffee (0.1 eth) </button></li>
        <li value="2"><button> <img src="https://www.svgrepo.com/show/43414/cake.svg" style={{maxWidth: "50px"}}/> coffee + cake (0.5 eth) </button></li>
        <li value="3"><button> <img src="https://www.svgrepo.com/show/30047/pizza.svg" style={{maxWidth: "50px"}}/> pizza (1 eth) </button></li>
      </ul>

      <button onClick={createTransaction}>donate</button>
      <button onClick={getBalance}>balance</button>
    </div>
  );
}

export default App;
