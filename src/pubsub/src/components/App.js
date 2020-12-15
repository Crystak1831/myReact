// import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
// import PubSub from 'pubsub-js';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";
//
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             increase:'none',
//             decrease:'none'
//         }
//     }
//     componentDidMount(){
//         this.pubsub_token = PubSub.subscribe('PubSubmessage', function (topic,message) {
//             this.setState({
//                 increase: message,
//                 decrease: message
//             });
//         }.bind(this));
//     }
//     componentWillUnmount(){
//         PubSub.unsubscribe(this.pubsub_token);
//     }
//     render() {
//         return (
//             <div>
//                 <Router>
//                 <header>
//                     Links:
//                     <Link to="/App/home">Home</Link>
//                 </header>
//                 </Router>
//                 <div style={{ marginTop: '1.5em' }}>{ this.props.children}</div>
//                 <div style={{ marginTop: '1.5em' }}>{ this.state.increase}</div>
//                 <div style={{ marginTop: '1.5em' }}>{ this.state.decrease}</div>
//             </div>
//         )
//     }
// }
