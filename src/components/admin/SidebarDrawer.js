import React, { Component } from 'react'
import classNames from 'classnames';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { mainListItems, secondaryListItems } from './listItems';

class SidebarDrawer extends Component {
    state = {
        open: true,
    };

    handleDrawerToggle = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes } = this.props;
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                }}
                open={this.state.open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={this.handleDrawerToggle}>
                        {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        )
    }
}

export default SidebarDrawer