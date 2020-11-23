import './App.css';
import React, {Component} from 'react';
import ControlledComponent from "./Components/ControlledComponent";
import UnControlled from "./Components/unControlled";

class App extends React.Component {
   render() {
       return(
           <div>
               <ControlledComponent/>
               <UnControlled/>
           </div>
       )
   }

}



export default App;


