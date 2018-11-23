import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  card: {
    maxWidth: 400,
    display: "inline-block",
    borderRadius: "2px",
    transition: "all .25s linear",
    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.4)",
    '&:hover': {
      boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)"
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ProjectCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleNavigate = () => {
    this.props.history.push(`/project/${this.props.project.id}`);
  }

  render() {
    const { classes, project, profile, location } = this.props;
    const date = moment(project.createdAt.toDate()).calendar();
    const image = require('../../assets/contemplative-reptile.jpg')

    return (
      <Card className={classes.card}>
        {(profile.role === 'admin' && location.includes('admin')) &&
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {project.authorInitials}
              </Avatar>
            }
            action={<IconButton><MoreVertIcon /></IconButton>}
            title={project.title}
            subheader={date}
          />
        }
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            {project.content}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>.....</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

// export default withStyles(styles)(ProjectCard);

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ProjectCard);