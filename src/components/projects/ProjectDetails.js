import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className='container section project-details'>
        <div className="card z-depth-0">
          <div className='card-content'>
            <div className='card-title'>{project.title}</div>
            <p>{project.content}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div >Posted by {project.authorFirstName}</div>
            <div >14 nov 9am</div>
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
    project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
