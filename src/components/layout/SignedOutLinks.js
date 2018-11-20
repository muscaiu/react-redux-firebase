import React from 'react'
import { NavLink } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import navbarsStyle from '../reusable/styles/navbarsStyle';

const SignedOutLinks = (props) => {
  const { classes } = props;
  return (
    // <ul className='right'>
    //   <li><NavLink to='/login' >Login</NavLink></li>
    //   <li><NavLink to='/register' >Register</NavLink></li>
    // </ul>
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          to='/login'
          className={classes.navLink}
          color="transparent"
        >
          Login
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to='/register'
          className={classes.navLink}
          color="transparent"
        >
          Register
        </NavLink>
      </ListItem>
    </List>
  )
}

export default withStyles(navbarsStyle)(SignedOutLinks);
