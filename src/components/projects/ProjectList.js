import React from 'react'

import classNames from 'classnames';
import ProjectCard from '../dashboard/ProjectCard';
import Grid from '@material-ui/core/Grid';
// import ProjectSummary from './ProjectSummary';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import dashBoardStyles from '../dashboard/styles/dashBoardStyles';

const ProjectList = ({ classes, projects }) => (
  <div className={classNames(classes.layout, classes.cardGrid)}>
    <Grid container spacing={40}>
      {projects && projects.map(project =>
        <Grid item key={project.id} sm={6} md={4} lg={3}>
          <div className='project-list section'>
            <div key={project.id} >
              <ProjectCard project={project} />
            </div>
          </div>
        </Grid>
      )}
    </Grid>
  </div>
)

export default withStyles(dashBoardStyles)(ProjectList);