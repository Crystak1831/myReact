// import React from 'react'
// import PubSub from 'pubsub-js'
//
// class Home extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             increase: 'increase',
//             decrease: 'decrease'
//         }
//     }
//
//     buttonIncrease = () =>{
//         PubSub.publish('Pubsubmessage', this.state.increase)
//     }
//     buttonDecrease = () =>{
//         PubSub.publish('PubSubmessage', this.state.decrease)
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.buttonIncrease}>Increase</button>
//                 <button onClick={this.buttonDecrease}>Decrease</button>
//             </div>
//         )
//     }
// }
//
// export default Home
