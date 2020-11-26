import './App.css';
import React from 'react';

import axios from 'axios'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0
    }
  }


  submitHandler = (e) =>{
      this.setState({
          inputValue: e.target.value
      })
  }



getData =() =>{
      var api = 'https://jsonplaceholder.typicode.com/users';

      //has two arguments, the first one is api, the second one is get the specific data form the api
      axios.get(api, {
          params: {
              id: this.state.inputValue
          }
      })
          .then (function (response) {
              console.log(response)
          })
          .catch(function (error) {
              console.log(error)
          });
}


  render() {
    return(
        <div>
          <input type="text" onChange = {this.submitHandler}/>
          <button onClick={this.getData}>click</button>
        </div>
    )
  }

}

export default App;
