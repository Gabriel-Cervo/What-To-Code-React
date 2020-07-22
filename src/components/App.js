import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubmitIdea from './SubmitIdea/SubmitIdea.jsx';

export default function App() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={A} />
                <Route path="/random" component={B} />
                <Route path="/submit" component={SubmitIdea} />
            </Switch>
        </Router>
    )
}

function A() {
    return(<h1>Main</h1>)
}

function B() {
    return(<h1>Random</h1>)
}