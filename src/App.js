import React from 'react';
import logo from './logo.svg';
import './App.css';
import Visual from './components/Visual'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Calculadora</h1>
      </header>
      <Visual />
    </div>
  );
}

export default App;