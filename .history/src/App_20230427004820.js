import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //properties
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('');

  // helper function
  async function requestAccount() {
    console.log('Requesting account ..');
    
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);

        const provider = new window.ethereum;
        const balanceInWei = await provider.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
        const balanceInEth = window.web3.utils.fromWei(balanceInWei, 'ether');
        setBalance(balanceInEth);
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
        <h3>Wallet address: {walletAddress}</h3>
        <h3>Balance: {balance} ETH</h3>
      </header>
    </div>
  );
}

export default App;
