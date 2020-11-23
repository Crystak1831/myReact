import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
* 在一个受控组件中，表单数据是由 React 组件来管理的。
* 非受控组件，表单数据将交由 DOM 节点来处理。
*  使用 ref 来从 DOM 节点中获取表单数据。
* */

class UnControlled extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef()
    }

    handleSubmit = (event) =>{
        alert('Name submit' + this.input.current.value)
        event.preventDefault()

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref = {this.input}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}



export default UnControlled;
