import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';

import withStyles from "@material-ui/core/styles/withStyles";
import navbarsStyle from '../reusable/styles/navbarsStyle';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Header from "../reusable/Header";

const Navbar = (props) => {
  const { auth, profile, classes } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  console.log(props);

  return (
    <Header
      brand="Navbar with notifications"
      color="dark"
      rightLinks={
        links
      }
    />

    // <nav className="nav-wrapper grey darken-3">
    //   <Link to='/' className='brand-logo' >Home</Link>
    //   {links}
    // </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default compose(
  withStyles(navbarsStyle),
  connect(mapStateToProps)
)(Navbar);
