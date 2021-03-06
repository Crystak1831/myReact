import React, {Component} from 'react';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        console.log("submitting" + " " +this.state.email + "password:"+ this.state.password);
        // console.log(this.state.value)
        e.preventDefault()
    }

    render() {
        // const {email, password} = this.state
        return (

                <form
                    onSubmit={this.handleSubmit}

                >
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="text"
                           name = "email"
                           value={this.state.email}
                           onChange={this.handleChange}

                    />
                    <br/>

                    <label htmlFor="email">Password</label>
                    <br/>
                    <input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                    />
                    <br/>
                    <button>Login</button>
                </form>
        );
    }
}

export default LoginForm;
