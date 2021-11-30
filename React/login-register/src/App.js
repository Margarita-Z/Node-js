import React, { Component } from "react";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import Nav from './Nav';
import NewPost from "./components/NewPost/NewPost";
import {BlogPost}  from "./components/BlogPost/BlogPost";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Nav />

          <Route path='/' exact={true} component={Home} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/allPost' component={BlogPost} />
          <Route path='/createPost' component={NewPost} />

        </div>
      </Router>

    );
  }
}

export default App;
