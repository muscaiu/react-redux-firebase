import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateProject from './components/projects/CreateProject';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProducts from './components/admin/AdminProducts';
import AdminReports from './components/admin/AdminReports';
import AdminCustomers from './components/admin/AdminCustomers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/create-project' component={CreateProject} />
            <Route exact path='/admin/dashboard' component={AdminDashboard} />
            <Route exact path='/admin/products' component={AdminProducts} />
            <Route exact path='/admin/customers' component={AdminCustomers} />
            <Route exact path='/admin/reports' component={AdminReports} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}


export default App;
