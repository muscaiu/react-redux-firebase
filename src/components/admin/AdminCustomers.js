import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { mainListItems, secondaryListItems } from './listItems';
import adminStyles from './styles/adminStyles';

class AdminCustomers extends React.Component {
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
    const { classes } = this.props;
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
            Customers
          </Typography>
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
    profile: state.firebase.profile
  }
}

AdminCustomers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withStyles(adminStyles)
)(AdminCustomers);
