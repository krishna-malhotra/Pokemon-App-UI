import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Authentication from './components/login/Authenticate';
import ReRoute from './components/login/ReRoute'
import MyPokemonList from './components/pokemon/MyPokemonList';
import MyPokemonCards from './components/pokemon/MyPokemonCard';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <ReRoute exact path="/" component={Signup} />
              <ReRoute exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Authentication exact path="/dashboard" component={Dashboard}/>
              <Authentication exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Authentication exact path = "/myPokemonsList" component={MyPokemonList} />
              <Authentication exact path = "/myPokemonsCards" component={MyPokemonCards} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
