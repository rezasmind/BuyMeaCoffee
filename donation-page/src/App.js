import React, { Component } from "react";
import { Container, Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap'

import Web3 from 'web3';

import { Donation } from './ABI/Donation'

const web3 = new Web3(Web3.givenProvider)

const contractAddress = "0x0bFA33486bc6e48B741b3641bC0B4F401Af1E84d"

const donationContract = new web3.eth.Contract(Donation, contractAddress)

function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
