import React from 'react'
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import CustomDropdown from "../reusable/CustomDropdown";
import navbarsStyle from '../reusable/styles/navbarsStyle';
import { logout } from '../../store/actions/authActions';
import profileImage from '../../assets/avatar.jpg'

const SignedInLinks = (props) => {
  const { classes } = props;
  return (
    // <ul className='right'>
    //   <li><NavLink to='/create-project' >New Project</NavLink></li>
    //   <li><NavLink onClick={props.logout} to='/' >Log Out</NavLink></li>
    //   <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
    // </ul>
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          to='/create-project'
          className={classes.navLink}
          color="transparent"
        >
          New Project
          </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to='/'
          className={classes.navLink}
          onClick={props.logout}
          color="transparent"
        >
          Logout
          </NavLink>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <NavLink
          // justIcon
          // round
          to='/'
          // className={classes.notificationNavLink}
          className='btn btn-floating pink lighten-1'
          onClick={e => e.preventDefault()}
          color="rose"
        >
          <Email className={classes.icons} />
          {props.profile.initials}
        </NavLink>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          caret={false}
          hoverColor="black"
          // dropdownHeader="Dropdown Header"
          buttonText={            
            <img src={profileImage} className={classes.img} alt="profile" />
          }
          buttonProps={{
            className:
              classes.navLink + " " + classes.imageDropdownButton,
            color: "transparent"
          }}
          dropdownList={["Profile", "Settings", "Sign out"]}
        />
      </ListItem>
    </List>
  )
}

const mapDipatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default compose(
  withStyles(navbarsStyle),
  connect(null, mapDipatchToProps)
)(SignedInLinks);