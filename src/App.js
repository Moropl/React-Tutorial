import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CredentialsForm}  from './components/credentialsForm/credentials-form.component';

function App() {
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
          Already react lerned
        </a>
        <CredentialsForm />
      </header>
    </div>
  );
}

export default App;
