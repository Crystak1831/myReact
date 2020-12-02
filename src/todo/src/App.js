// import logo from './logo.svg';
import './App.css';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      newItem: '',
      list: []
    }

    // this.addHandler = this.addHandler.bind(this)
  }

  changeHandler(e){
      this.setState({
          newItem: e.target.value
      })
  }

  // addHandler(){
  addHandler =()=>{
        const newItem = {
            id: Math.random(),

            value: this.state.newItem.slice()
            //和slice一样是shallow copy
            // value: [...this.state.newItem]
        };

        const list = [...this.state.list]

          list.push(newItem);

        this.setState({
            list,
            newItem:" "
        })
  }

  deleteHandler(id, event){
      const list = [...this.state.list]

      list.splice(id,1);
      // const updateList = list.filter(item =>item.id !== id)
      this.setState({
          // list: updateList
          list: list
      })

  }



  render() {
    return (
        <div className="App">
          <h1>To Do</h1>
          <input  type="text"
                  onChange = {e=>{this.changeHandler(e)}}
                  value={this.state.newItem}
          />
          <button onClick={this.addHandler}>+</button>
            <ul>
                {this.state.list.map(item => {
                    return (
                        <li key = {item.id}>
                            {item.value}
                            <button onClick={() => this.deleteHandler(item.id)}>delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
  }
}



export default App;
