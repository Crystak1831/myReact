import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
* 	Controlled component: 例如input，textarea有自身的state(也就是有自身的value值)，
* 把value和state进行严格绑定，更新的时候通过onchange把value通过setState设置到state中，从State中获取value。
*/

class ControlledComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit(event){
        alert('submit name' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value = {this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>

            </form>
        )
    }
}



export default ControlledComponent;
