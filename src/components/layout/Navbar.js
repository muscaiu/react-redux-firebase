import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Header from "../reusable/Header";
import parallaxStyle from '../reusable/styles/parallaxStyle';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <Header
      brand="Home"
      color="dark"
      rightLinks={
        links
      }
    />
    // <Fragment>
    //   <Header
    //     brand="Home"
    //     rightLinks={links}
    //     fixed
    //     color="transparent"
    //     changeColorOnScroll={{
    //       height: 400,
    //       color: "white"
    //     }}
    //   />
    //   <Parallax image={require("../../assets/bg4.jpg")} />
    // </Fragment>

  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default compose(
  withStyles(parallaxStyle),
  connect(mapStateToProps)
)(Navbar)
