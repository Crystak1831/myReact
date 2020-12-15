import React, { Component } from 'react';
import {BrowserRouter } from 'react-router-dom';
import { Router, Route, } from 'react-router'

import  App from './components/App.js'
import  Home from './components/Home.js'

export default class RouterIndex extends Component {
    render() {
        return (
            <BrowserRouter>
                <App path="/App" component={App}>
                    <Route path="/App/home" component={Home} />
                </App>
            </BrowserRouter>
        )
    }
}
