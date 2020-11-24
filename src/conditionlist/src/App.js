import './App.css';
import React, {Component} from 'react';
import Person from '../src/components/Person/Person'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id:1, name:'Max', age:20},
        {id:2, name:'Alen', age:21},
        {id:3, name:'Min', age:12},
      ],
      showPerson: false
    }
  }

  changeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
      // persons: [
      //   {id:1, name:event.target.value, age:20},
      //   {id:2, name:'Alen', age:21},
      //   {id:3, name:'Min', age:12},
      // ]
    })
  }

  toggleHandler = () =>{
    const doesShow = this.state.showPerson
    this.setState({
    showPerson: !doesShow})
  }

  deletePerson  = (personIndex) =>{
    const persons = this.state.persons.slice();
        persons.splice(personIndex,1)
    this.setState({
      persons: persons
    })
  }


  render() {

    let persons = null
    if(this.state.showPerson){
      persons = (
          <div>
            {this.state.persons.map((person,index)=>{
              return <Person name = {person.name}
                             age = {person.age}
                             key = {person.id}
                             changed = {(event) =>this.changeHandler(event,person.id)}
                             click = {()=>this.deletePerson(index)}
              />

            })}
          </div>
      )

    }

    return (
        <div className='App'>
        <h1>Hi. I'm react</h1>
          <button onClick={this.toggleHandler}>toggle</button>
          {persons}
        </div>
    );
  }
}

export default App;


