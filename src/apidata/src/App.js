import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React from 'react'

const {useEffect,useState} = React;

const fetchRandom = () => {
    return axios.get('https://api.randomuser.me/')
        .then(({data}) => {
            console.log(data)
            //null 和 2 可以美化JSON data
            return JSON.stringify(data, null,2)
        })
        .catch(error => {
            console.log(error)
        })
}

function App() {
    const [counter, setCount] = useState(0)
    const [randomUserDataJSON, setRandomDataJSON] = useState("")

    useEffect(() => {
        fetchRandom().then((randomData) =>{
            setRandomDataJSON(randomData || 'No User Data')
        })

    }, [])
  return (
    <div className="App">
      <h1>Hello</h1>
        <p>{counter}</p>
        {/*<p>*/}
            <pre>
            {randomUserDataJSON}
            </pre>
        {/*</p>*/}

    </div>
  );
}



export default App
