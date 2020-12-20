import logo from './logo.svg';
import './App.css';
import React from 'react'

const {useState} = React

function App() {
    const [counter, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Hello</h1>
        <p>{counter}</p>
        <button onClick={() => {
            setCount(counter + 1)
        }}>+</button>
    </div>
  );
}

export default App;
