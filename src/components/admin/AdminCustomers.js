import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import adminStyles from './styles/adminStyles';
import SidebarDrawer from './SidebarDrawer';

class AdminCustomers extends React.Component {

  renderDashBoard = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <SidebarDrawer classes={classes}/>
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
