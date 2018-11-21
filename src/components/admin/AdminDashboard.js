import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { mainListItems, secondaryListItems } from './listItems';
import adminStyles from './styles/adminStyles';
import ProjectList from '../projects/ProjectList';
import Notifications from '../dashboard/Notifications';

class AdminDashboard extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  renderDashBoard = () => {
    const { classes, projects, notifications } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            Dashboard
          </Typography>

          <ProjectList projects={projects} />
          {/* <div className='dashboard container'>
            <div className="row">
              <div className="col s12 m6">
              </div>
              <div className="col s12 m5 offset-m1">
                <Notifications notifications={notifications} />
              </div>
            </div>
          </div> */}
        </main>
      </div>
    );
  }

  render() {
    const { profile } = this.props;

    if (profile.isLoaded) {
      return profile.role !== 'admin' ? <Redirect to={'/login'} /> : this.renderDashBoard()
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    profile: state.firebase.profile,
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  }
}

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(adminStyles),
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
  ])
)(AdminDashboard);