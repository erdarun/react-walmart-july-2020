import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
//import {hello as Hello} from './components/Hello';


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
          Learn React
        </a>
      </header>
      <section>
          {/* <Hello message="React"/>
          <Hello message="JSX"/>
          <Hello message="With Children">
            This is some content
          </Hello> */}

          <Counter title="Counter"/>
          <Counter title="The Count"/>
      </section>
    
    </div>
  );
}

export default App;
