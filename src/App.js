import React from 'react';
import Quiz from './Quiz';
import Score from './Score';
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'
import Login from './Login';

function App() {
    return (
      <div className="App">
        <Login/>
      <Navbar/>
      <Switch>
        <Route exact path = '/'>
            <h1>You have 5 questions. You can click the button only 5 times.</h1>
            <Quiz/>
        </Route>
        <Route exact path ='/score'> 
            <Score/>
        </Route> 
      </Switch>
      </div>
    );
}

export default App