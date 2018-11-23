import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import Button from '../reusable/Button';
import adminStyles from './styles/adminStyles';
import ProjectList from '../projects/ProjectList';
import GridContainer from '../reusable/GridContainer';
import GridItem from '../reusable/GridItem';
import SidebarDrawer from './SidebarDrawer';

class AdminDashboard extends React.Component {
  renderDashBoard = () => {
    const { classes, projects, location } = this.props;
    return (
      <div className={classes.root}>
        <SidebarDrawer classes={classes} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <GridContainer>
            <GridItem>
              <Typography variant="h4" gutterBottom component="h2">
                Dashboard
               </Typography>
              <NavLink
                to='/create-project'
                className={classes.navLink}
                color="transparent"
              >
                <Button onClick={this.handleAddProject} justIcon round color="primary"><AddIcon /></Button>
              </NavLink>
            </GridItem>

            <ProjectList projects={projects} location={location.pathname} />
            {/* <div className='dashboard container'>
              <div className="row">
                <div className="col s12 m6">
                </div>
                <div className="col s12 m5 offset-m1">
                  <Notifications notifications={notifications} />
                </div>
              </div>
            </div> */}
          </GridContainer>
        </main>

      </div >
    );
  }

  render() {
    const { profile } = this.props;
    console.log(this.props);
    if (profile.isLoaded) {
      return profile.role !== 'admin' ? <Redirect to={'/login'} /> : this.renderDashBoard()
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
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