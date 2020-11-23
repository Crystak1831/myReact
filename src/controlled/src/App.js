import './App.css';
import React, {Component} from 'react';
import ControlledComponent from "./Components/ControlledComponent";
import UnControlled from "./Components/unControlled";
import MutipleControll from "./Components/MutipleControll";

class App extends React.Component {
   render() {
       return(
           <div>
               <ControlledComponent/>
               <UnControlled/>
               <MutipleControll/>
           </div>
       )
   }

}



export default App;


