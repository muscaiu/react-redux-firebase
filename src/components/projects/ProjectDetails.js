import React from 'react'

const ProjectDetails = (props) => {
  const { id } = props.match.params;
  return (
    <div className='container section project-details'>
      <div className="card z-depth-0">
        <div className='card-content'>
          <div className='card-title'>Project Title - {id}</div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ex aliquam nam cumque, similique unde! Magni repellendus, nostrum distinctio praesentium corrupti dolores iste similique, quibusdam dicta architecto odit in cumque.</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div >Posted by Tyler</div>
          <div >14 nov 9am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
