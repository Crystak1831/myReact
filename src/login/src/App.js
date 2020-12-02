import React, {Component} from 'react';
import ValidateLoginForm from "./components/ValidateLoginForm/ValidateLoginForm";
import LoginForm from "./components/ValidateLoginForm/LoginForm";

import PropTypes from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ValidateLoginForm/>
                {/*<LoginForm/>*/}
            </div>
        );
    }
}

App.propTypes = {};

export default App;
