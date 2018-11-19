import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className='right'>
      <li><NavLink to='/create-project' >New Project</NavLink></li>
      <li><NavLink onClick={props.logout} to='/' >Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDipatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDipatchToProps)(SignedInLinks);
