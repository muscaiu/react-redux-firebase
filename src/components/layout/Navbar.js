import React from 'react'
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Header from "../reusable/Header";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

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

export default connect(mapStateToProps)(Navbar);
