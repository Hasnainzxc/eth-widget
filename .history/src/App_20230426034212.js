import React, { useState } from 'react';
import * as ethers from 'ethers';

function App() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  async function getBalance() {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const newBalance = await provider.getBalance(account);
      setBalance(newBalance.toString());
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <h1>Get Account Balance</h1>
      <input type="text" onChange={(e) => setAccount(e.target.value)} />
      <button onClick={getBalance}>Get Balance</button>
      {balance && <p>Balance: {balance}</p>}
    </div>
  );
}

export default App;
