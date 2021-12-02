import './App.css';
import artwork from './artwork.png';
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <div className="App">
      <Artwork/>
      <Documentation/>
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
        <video id = "artwork" className='artwork' autoPlay loop muted poster = {artwork}>
          <source src={'https://k7veu4em4t7x7booofdvvhbcksgh34zgepjh62i55uiomvluhn5a.arweave.net/V-pKcIzk_3-FznFHWpwiVIx98yYj0n9pHe0Q5lV0O3o'} type='video/mp4' />
        </video>
        <div className = "artwork-info">
          <header className = "collab" style = {{textAlign: 'left', padding: '0 0 8px calc(25vw - 355px)'}}>
            { useMediaQuery({ query: '(max-width: 450px)' }) ? "KLIMADAO x SVN / 2021" : "⤷ KLIMADAO x SVN / 2021" }
          </header>
          <header className = "edition" style = {{animation: 'fadeInRight 1.3s', fontStyle: 'italic'}} >
            Edition 1 of 1
          </header>
        </div>
        { useMediaQuery({ query: '(max-width: 450px)' })
        ? 
          <header className = "caption-info" style = {{textAlign: 'left', padding: '0 0 8px calc(25vw - 355px)'}}>
            Video / 2000px x 2000px
            <br/>
            / 240 frames / 10sec / mp4
          </header>
        :
          <header className = "caption-info" style = {{textAlign: 'left', padding: '0 0 8px calc(25vw - 355px)'}}>
            Video / 2000px x 2000px / 240 frames / 10sec / mp4
          </header>
        }
        <header className = "caption-info" style = {{textAlign: 'left', padding: '0 0 0 calc(25vw - 355px)'}}>
          <a className = "opensea" href="https://opensea.io/" target="_blank">View on Opensea</a>
        </header>
      </div>
      <hr/>
    </div>
  )
}

function Documentation() {
  const Web3 = require('web3');
  const web3 = new Web3(new Web3.providers.HttpProvider('https://matic.getblock.io/mainnet/?api_key=2b421f08-5113-40e1-a599-8f8cfedceb7e'));

  const sKLIMAaddress = '0xb0c22d8d350c67420f06f48936654f567c73e8c8';
  const sKLIMAabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rebase","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"stakingContract","type":"address"}],"name":"LogStakingContractUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"LogSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipPulled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gons","type":"uint256"}],"name":"balanceForGons","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"circulatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gonsForBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakingContract_","type":"address"}],"name":"initialize","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initializer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pullManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"pushManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"profit_","type":"uint256"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"name":"rebase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rebases","outputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"uint256","name":"rebase","type":"uint256"},{"internalType":"uint256","name":"totalStakedBefore","type":"uint256"},{"internalType":"uint256","name":"totalStakedAfter","type":"uint256"},{"internalType":"uint256","name":"amountRebased","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"blockNumberOccured","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_INDEX","type":"uint256"}],"name":"setIndex","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
  const sKLIMAcontract = new web3.eth.Contract(sKLIMAabi, sKLIMAaddress);

  const sKLIMA = sKLIMAcontract.methods.index().call();
  sKLIMA.then((m) => {
    document.getElementById("sKLIMAindex").textContent = (m/999999999).toFixed(3);
  }).catch(() => {
    document.getElementById("sKLIMAindex").textContent = "";
  });

  const BCTaddress = '0x2f800db0fdb5223b3c3f354886d907a671414a7f';
  const BCTabi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"erc20","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Redeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"addToList","type":"bool"},{"internalType":"string[]","name":"_regions","type":"string[]"},{"internalType":"string[]","name":"_standards","type":"string[]"},{"internalType":"string[]","name":"_methodologies","type":"string[]"}],"name":"addAttributes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"erc20Addr","type":"address[]"}],"name":"addToExternalWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"erc20Addr","type":"address[]"}],"name":"addToInternalBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"erc20Addr","type":"address[]"}],"name":"addToInternalWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"}],"name":"checkAttributeMatching","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractRegistry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"externalWhiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_minimumVintageStartTime","type":"uint64"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"internalBlackList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"internalWhiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"methodologies","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"methodologiesIsAcceptedMapping","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumVintageStartTime","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"erc20s","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"redeemMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"regions","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"regionsIsAcceptedMapping","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"erc20Addr","type":"address[]"}],"name":"removeFromExternalWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"erc20Addr","type":"address[]"}],"name":"removeFromInternalBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"erc20Addr","type":"address[]"}],"name":"removeFromInternalWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_minimumVintageStartTime","type":"uint64"}],"name":"setMinimumVintageStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newCap","type":"uint256"}],"name":"setSupplyCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setToucanContractRegistry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"standards","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"standardsIsAcceptedMapping","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supplyCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_mappingName","type":"string"},{"internalType":"bool","name":"accepted","type":"bool"}],"name":"switchMapping","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]
  const BCTcontract = new web3.eth.Contract(BCTabi, BCTaddress);
  const BCTreserves = BCTcontract.methods.balanceOf('0x7Dd4f0B986F032A44F913BF92c9e8b7c17D77aD7').call();
  const BCTliquiditypool = BCTcontract.methods.balanceOf('0x9803c7aE526049210a1725F7487AF26fE2c24614').call();

  const KLIMAaddress = '0x4e78011ce80ee02d2c3e649fb657e45898257815';
  const KLIMAabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"previousTWAPEpochPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTWAPEpochPeriod","type":"uint256"}],"name":"TWAPEpochChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousTWAPOracle","type":"address"},{"indexed":true,"internalType":"address","name":"newTWAPOracle","type":"address"}],"name":"TWAPOracleChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newTWAPSource","type":"address"}],"name":"TWAPSourceAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"removedTWAPSource","type":"address"}],"name":"TWAPSourceRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"_burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newTWAPSourceDexPool_","type":"address"}],"name":"addTWAPSource","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTWAPEpochPeriod_","type":"uint256"}],"name":"changeTWAPEpochPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newTWAPOracle_","type":"address"}],"name":"changeTWAPOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"twapSourceToRemove_","type":"address"}],"name":"removeTWAPSource","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault_","type":"address"}],"name":"setVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"twapEpochPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"twapOracle","outputs":[{"internalType":"contract ITWAPOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
  const KLIMAcontract = new web3.eth.Contract(KLIMAabi, KLIMAaddress);

  const KLIMAtotalsupply = KLIMAcontract.methods.totalSupply().call();
  const KLIMAinBCT = KLIMAcontract.methods.balanceOf('0x7De627C56D26529145a5f9D85948ecBeAF9a4b34').call();
  const KLIMAinBCT_USDC = KLIMAcontract.methods.balanceOf('0xBF2A35efcd85e790f02458Db4A3e2f29818521c5').call();
  const KLIMAinKLIMA_BCT = KLIMAcontract.methods.balanceOf('0x9803c7aE526049210a1725F7487AF26fE2c24614').call(); // klp
  const KLIMAinDAO = KLIMAcontract.methods.balanceOf('0x65A5076C0BA74e5f3e069995dc3DAB9D197d995c').call();

  const co2promises = [BCTreserves, BCTliquiditypool, KLIMAinKLIMA_BCT, KLIMAtotalsupply, sKLIMA, KLIMAinBCT, KLIMAinBCT_USDC, KLIMAinDAO ];
  Promise.allSettled(co2promises).then((results) => {
    const br = results[0].value/999999999999999999;
    const blp = results[1].value/999999999999999999;
    const klp = results[2].value/999999999;
    const kts = results[3].value/999999999;
    const index = results[4].value/999999999;
    const kcs = kts - results[5].value/999999999 - results[6].value/999999999 - results[7].value/999999999;

    document.getElementById("carbonTonnes").textContent = ((br + 2*Math.sqrt(blp*klp)) / kcs * index).toFixed(3);
  }).catch(() => {})

  return (
    <div>
      <header className = "section-documentation" style={{padding: '10px 0 100px 0'}}>
        01 <span style={{ color: "#6D6D6D" }}>DOCUMENTATION</span>
      </header>
      <div className = "documentation">
        <div>
          <header className = "documentation-info">
            <span id = "sKLIMAindex" className = "KLIMAindex"></span>&nbsp;&nbsp;&nbsp;<span className = "KLIMA">$KLIMA</span>
          </header>
          <header className = "caption-grey">
            OWNED BY THE ARTWORK
          </header>
        </div>
        <div>
          <header id = "carbonTonnes" className = "KLIMAindex" style = {{animation: 'fadeInRight 1.3s'}}/>
          <header className = "caption-grey" style = {{animation: 'fadeInRight 1.3s'}}>
            EQUALING CARBON TONES
          </header>
        </div>
      </div>
      <div className = "documentation-links">
        <a className = "documentation-link" href="https://dune.xyz/Cujowolf/Klima-DAO" target="_blank">View on Dune Analytics</a>
        <br/>
        <a className = "documentation-link" href="https://polygonscan.com/token/0xb0c22d8d350c67420f06f48936654f567c73e8c8" target="_blank">View on Opensea</a>
        <br/>
        <a className = "documentation-link" href="https://k7veu4em4t7x7booofdvvhbcksgh34zgepjh62i55uiomvluhn5a.arweave.net/V-pKcIzk_3-FznFHWpwiVIx98yYj0n9pHe0Q5lV0O3o" target="_blank">View on ArWeave</a>
      </div>
      <hr/>
    </div>
  )
}

function About() {
  return (
    <div style={{paddingBottom: '20px'}}>
      <header className = "section" style={{padding: '10px 0 50px 0'}}>
        02 <span style={{ color: "#6D6D6D" }}>ABOUT</span>
      </header>
      { useMediaQuery({ query: '(max-width: 450px)' })
      ? 
        <header className = "title">
          CO2_COMPOUND
          <br/>
          <span style={{ color: "#6D6D6D", fontWeight: '500' }}> is a carbon compounding artwork.</span>
        </header>
      :
        <header className = "title">
        CO2_COMPOUND <span style={{ color: "#6D6D6D", fontWeight: '500' }}>is a</span>
        <br/>
        <span style={{ color: "#6D6D6D", fontWeight: '500' }}>carbon compounding artwork.</span>
        </header>
      }
      <p className = "about">
        The work is functioning as a black hole for 1 staked $KLIMA token.
        This token is irreversibly fused into the artworks smart contract.
        The token is impossible to unstake / redeem and will, as long KlimaDAO exists, express an economic interest and stake in the DAO and therefore the broader carbon market. At launch the work owned 4.14T of CO2 offset.
        This website is tracking its growth.
      </p>
      <p className = "about">
        The work explores the question as to whether art can emerge from being a subject of economic interest & 
        speculation to being an expression of it, i.e the artwork becomes an economic actor with a transparent & 
        immutable financial intent that cant be influenced or changed by either 
        artist or collectors in the future.
      </p>
      <p className = "about">
        KlimaDAO itself is an agent of both financial and climate activism through novel blockchain-powered
        market coordination.  The work therefore explores the idea of becoming an active participant in
        the financial coordination problem which at one level underscores the climate crisis.
        The piece, by incorporating KLIMA tokens, serves to create upward price pressure on the global
        carbon market. It is thus an element of leverage in the system, rather than a purely subjective
        object open to financial speculation.
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
      <header className = "footer">
        <a className = "footer" href = "https://www.klimadao.finance/" target="_blank">KLIMADAO</a>
          &nbsp;&nbsp; X &nbsp;&nbsp;
        <a className = "footer" href = "https://twitter.com/__s_v_n__" target="_blank">SVN</a>
      </header>
    </div>
  )
}
export default App;
