import React, {useEffect} from "react";

import logo from './logo.svg';
import './App.css';

const App = () => {
  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    try {
      const res = await fetch("/api/data");
      console.log(res);
      const statusInfo = await res.json();
      console.log(statusInfo);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
