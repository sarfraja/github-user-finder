import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import User from './components/users/User'
import Home from './components/pages/Home'
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import FrontPage from './components/pages/FrontPage'
import Footer from './components/pages/Footer'


import './App.css';

const App =() => {

    return (

      <GithubState>
        <AlertState>

      <Router>

      <div className="App">
        
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/search" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route component={NotFound} />

           
            </Switch>
         

        </div>
        <Footer />
        
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  }


export default App;
