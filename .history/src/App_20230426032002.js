import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';

function App() {

  const [walletAddress, setWalletAddress] = useState('');

  async function requestAccount() {
    console.log('Requesting account..');

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      try {
        await requestAccount();
      } catch (error) {
        console.log('Error:', error);
      }
    } else {
      console.log('MetaMask not detected.');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>Connect eth</button>
        <h3>wallett address is {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
