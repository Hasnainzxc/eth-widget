import logo from './logo.svg';
import './App.css';

function App() {

  async function requestAccount() {
    console.log('Requesting account ..');

    if (window.ethereum) {
      console.log('detected');
    } else {
      console.log('not detected');
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>Connect eth</button>
        <h3>wallett adress is 0xccc</h3>
      </header>
    </div>
  );
}

export default App;
