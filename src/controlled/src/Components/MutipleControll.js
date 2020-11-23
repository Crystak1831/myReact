import React, {Component} from 'react';
import PropTypes from 'prop-types';


/*
* 档处理多个input表单的时候，我们每次都要获取value的值，这样写起来太麻烦了，可以通过给每个元素添加一个name属性，来让处理函数根据
* event.target.name的值来选择做什么
* */
class MutipleControll extends Component {
    /*多个input都用handlerChange*/
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Mail: '',
            IsAdmin: true,
            IsRemember:true
        }
    }

    handlerChange = e =>{
        this.setState({
            [e.target.name]: e.target.type === 'checkbox'? e.target.checked: e.target.value
            // [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <form >
                    <label>
                        is client:
                        <input type="checkbox"
                                name = "IsAdmin"
                               onChange={this.handlerChange}
                               defaultChecked={this.state.IsAdmin}
                        />
                    </label>
                    <br/>
                    <label>
                        remember password?:
                        <input type="checkbox"
                               name = "IsRemember"
                               onChange={this.handlerChange}
                               defaultChecked={this.state.IsRemember}
                        />
                    </label>
                    <br/>
                    <label>
                        user name: <input
                        type="text"
                        name = "Name"
                        onChange={this.handlerChange}
                        value = {this.state.Name}
                    />
                    </label>
                    <br/>
                    <label>
                        Mail: <input
                        type="mail"
                        name = "Mail"
                        onChange={this.handlerChange}
                        value = {this.state.Mail}
                    />
                    </label>
                </form>
                <hr/>
                name:{this.state.Name} <br/>
                mail:{this.state.Mail} <br/>
                isadmin:{this.state.IsAdmin? 'true':'false'} <br/>
                isremember:{this.state.IsRemember? 'true':'false'}


            </div>
        );
    }
}

export default MutipleControll;
