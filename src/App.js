import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          {auth.uid && <Navbar />}
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/create-project' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App)
