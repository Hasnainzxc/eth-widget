import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';

function App() {

  //propertties
  const [walletAddress, setWalletAddress] = useState('');
// helper function
//request acess to user Mets MASK WaLLET

  async function requestAccount() {
    console.log('Requesting account ..');
    
    async function connectWallet() {
      if(typeof window.ethereum !== 'undefined') {
        await requestAccount();

        const provider = new ethers.provider.web3Provider(window.ethereum);
      }
    }


    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      }
      catch (error) {
        console.log('error', error);
      }
    } else {
      console.log('not detected');
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>Connect eth</button>
        <h3>wallett adress is {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
