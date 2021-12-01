import React, { useState } from 'react';
import './App.css';
import artwork from './artwork.mp4';
import data from './data.png';

function App() {
  return (
    <div className="App">
      <Artwork/>
      <Graph/>
      <About/>
      <Footer/>
    </div>
  );
}

function Artwork() {
  return (
    <div style = {{ paddingTop: '50px' }} >
      <div >
        <header className = "title" >
          CO2_COMPOUND
        </header>
        <header className = "subtitle">
          A CARBON COMPOUNDING ARTWORK
        </header>
      </div>
      <div style = {{ textAlign: 'center' }}>
        <video id = "artwork" className='artwork' autoPlay loop muted>
          <source src={'https://k7veu4em4t7x7booofdvvhbcksgh34zgepjh62i55uiomvluhn5a.arweave.net/V-pKcIzk_3-FznFHWpwiVIx98yYj0n9pHe0Q5lV0O3o'} type='video/mp4' />
        </video>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <header className = "caption" style = {{textAlign: 'left', padding: '0 0 8px calc(25vw - 355px)'}}>
            ↪ KLIMADAO x SVN / 2021
          </header>
          <header className = "caption" style = {{animation: 'fadeInRight 1.3s', fontStyle: 'italic', padding: '0 calc(25vw - 355px) 8px 0'}} >
            Edition 1 of 1
          </header>
        </div>
        <header className = "caption-info" style = {{textAlign: 'left', padding: '0 0 8px calc(25vw - 355px)'}}>
          Video / 2000px x 2000px / 240 frames / 10sec / mp4
        </header>
        <header className = "caption-info" style = {{textAlign: 'left', padding: '0 0 0 calc(25vw - 355px)'}}>
          <a className = "opensea" href="https://opensea.io/" target="_blank">View on Opensea</a>
        </header>
      </div>
      <hr/>
    </div>
  )
}

function Graph() {
  const Web3 = require('web3');
  const web3 = new Web3(new Web3.providers.HttpProvider('https://matic.getblock.io/mainnet/?api_key=2b421f08-5113-40e1-a599-8f8cfedceb7e'));
  var address = '0xb0c22d8d350c67420f06f48936654f567c73e8c8';
  var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rebase","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakingContract","type":"address"}],"name":"LogStakingContractUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"LogSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipPulled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gons","type":"uint256"}],"name":"balanceForGons","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"circulatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gonsForBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakingContract_","type":"address"}],"name":"initialize","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initializer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pullManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"pushManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"profit_","type":"uint256"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"name":"rebase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rebases","outputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"uint256","name":"rebase","type":"uint256"},{"internalType":"uint256","name":"totalStakedBefore","type":"uint256"},{"internalType":"uint256","name":"totalStakedAfter","type":"uint256"},{"internalType":"uint256","name":"amountRebased","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"blockNumberOccured","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_INDEX","type":"uint256"}],"name":"setIndex","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
  const contract = new web3.eth.Contract(abi, address);

  const sKLIMA = contract.methods.index().call();
  sKLIMA.then((m) => {
    document.getElementById("sKLIMAindex").textContent = (m/999999999).toFixed(3);
  }).catch(() => {
    document.getElementById("test1").textContent = "";
  });

  return (
    <div>
      <header className = "caption" style={{padding: '10px 0 60px 0'}}>
        01 <span style={{ color: "#6D6D6D" }}>DOCUMENTATION</span>
      </header>
      <img src = {data} alt = "bruh" style = {{width: '100%', paddingBottom: '60px'}} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <header>
            <span id = "sKLIMAindex" className = "KLIMAindex"></span>&nbsp;&nbsp;&nbsp;<span className = "KLIMA">$KLIMA</span>
          </header>
          <header className = "caption-grey">
            OWNED BY THE ARTWORK
          </header>
        </div>
        <div>
          <header className = "KLIMAindex" style = {{animation: 'fadeInRight 1.3s'}}>
            5.14
          </header>
          <header className = "caption-grey" style = {{animation: 'fadeInRight 1.3s'}}>
            EQUALING CARBON TONES
          </header>
        </div>
      </div>
      <hr/>
    </div>
  )
}

function About() {
  return (
    <div style={{paddingBottom: '20px'}}>
      <header className = "caption" style={{padding: '10px 0 50px 0'}}>
        02 <span style={{ color: "#6D6D6D" }}>ABOUT</span>
      </header>
      <header className = "title">
        CO2_COMPOUND <span style={{ color: "#6D6D6D", fontWeight: '500' }}>is a</span>
        <br/>
        <span style={{ color: "#6D6D6D", fontWeight: '500' }}>carbon compounding artwork.</span>
      </header>
      <p className = "about">
        The work is functioning as a black hole for 1 staked $KLIMA token.
        This token is irreversibly fused into the artworks smart contract (0x12345...).
        The token is impossible to unstake / redeem and will, as long KlimaDAO exists, 
        express an economic interest and stake in the DAO and therefore the broader 
        carbon market. At launch the work owns 3,2T of CO2 offset.
        This website is tracking its growth.
      </p>
      <p className = "about">
        The work explores the question as to wheter art can emerge from being a subject 
        of economic interest & speculation to being an expression of it, i.e the artwork 
        becomes an economic actor with a transparent & immutaable finanical intent that
        cant be influenced or changed by either artist or collectors in the future.
      </p>
      <p className = "about">
        KlimaDAO itself is an agent of both financial and climate activism through novel
        blockchain-powered market coordination. The work therefore explores the idea of
        becoming an active participant in the financial coordination problem which at one
        level underscores the climate crisis. The piece, by incorporating KLIMA tokens,
        serves to create upward price pressure on the global carbon market. It is thus an 
        element of leverage in the system, rather than a purely subjective object open to 
        financial speculation.
      </p>
      <p className = "about">
        The climate crisis at its core, is a collective action & coordination problem.
        There is no one way to solve it. This is an experiment.
      </p>
      <hr/>
    </div>
  ) 
}

function Footer() {
  return (
    <div style={{paddingBottom: "25vh"}}>
      <header className = "caption">
        <a className = "footer" href = "https://www.klimadao.finance/" target="_blank">KLIMADAO</a>
        &nbsp; x &nbsp;
        <a className = "footer" href = "https://www.instagram.com/sven.eberwein/?hl=en" target="_blank">SVN</a>
      </header>
    </div>
  )
}
export default App;
