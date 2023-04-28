import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // properties
  const [walletAddress, setWalletAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');

  // helper functions
  async function requestAccount() {
    console.log('Requesting account ..');

    async function connectWallet() {
      if(typeof window.ethereum !== 'undefined') {   
      }
    }

    if (window.ethereum) {
      console.log('detected');

      try {
        // request access to the user's Metamask wallet
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);

        // retrieve the account balance
        const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0]] });
        setAccountBalance(balance);
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
        <h3>wallett address is {walletAddress}</h3>
        <h3>account balance is {accountBalance}</h3>
      </header>
    </div>
  );
}

export default App;
