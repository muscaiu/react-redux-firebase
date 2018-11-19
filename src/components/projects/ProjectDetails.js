import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  const date = moment(project.createdAt.toDate()).calendar();

  if (!auth.uid) return <Redirect to={'/login'} />

  if (project) {
    return (
      <div className='container section project-details'>
        <div className="card z-depth-0">
          <div className='card-content'>
            <div className='card-title'>{project.title}</div>
            <p>{project.content}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{date}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">Loading project ...</div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null

  return {
    project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
