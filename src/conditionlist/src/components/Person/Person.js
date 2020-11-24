import React from 'react'
import './Perosn.css'

const Person = (props) =>{
    return <div className="Person">
        <p onClick={props.click}>my name is {props.name}, I'm {props.age} years old</p>
        <input type="text" onChange={props.changed} value = {props.name}/>
    </div>
}
export default Person
