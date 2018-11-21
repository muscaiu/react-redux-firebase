import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
    const { projects, notifications } = this.props;
    return (
      // <GuttersGrid />
      // <div className='dashboard container'>
      //   <div className="row">
      //     <div className="col s12 m6">
      <ProjectList projects={projects} />

      //     </div>
      //     <div className="col s12 m5 offset-m1">
      //       <Notifications notifications={notifications} />
      //     </div>
      //   </div>
      // </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
