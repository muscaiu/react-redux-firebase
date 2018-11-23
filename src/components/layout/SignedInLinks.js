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
  const { classes, profile } = props;
  return (
    <List className={classes.list}>
      {profile.role === 'admin' &&
        < ListItem className={classes.listItem}>
          <NavLink
            to='/admin/dashboard'
            className={classes.navLink}
            color="transparent"
          >
            Admin
          </NavLink>
        </ListItem>
      }
      {/*<ListItem className={classes.listItem}>
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
          // justIcon
          // round
          to='/'
          // className={classes.notificationNavLink}
          className='btn btn-floating pink lighten-1'
          onClick={e => e.preventDefault()}
          color="rose"
        >
          {props.profile.initials}
        </NavLink>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          logout={props.logout}
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
    </List >
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default compose(
  withStyles(navbarsStyle),
  connect(mapStateToProps, mapDipatchToProps)
)(SignedInLinks);