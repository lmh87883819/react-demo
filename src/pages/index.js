import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Home from './home'
import SubHome from './subhome'

class Index extends Component {

    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/subhome/:id"  component={ SubHome } />
                    {/* <Route path="/secondPage" component={ SecondPage } /> */}
                </Switch>
            </Router>
        )
    }
}

export default Index