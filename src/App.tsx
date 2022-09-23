import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Card>
          这是一个卡片组件
        </Card>
      </header>
    </div>
  );
}

// 卡片组件
function Card(props: any) {
  return (
    <div className="card">
      <div className="card-content">
        {props.children}
      </div>
    </div>
  );
}


export default App;

