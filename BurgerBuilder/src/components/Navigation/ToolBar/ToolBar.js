import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) => (
  <header className={classes.ToolBar}>
    <DrawerToggler clicked={props.drawerTogglerClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DeskTopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;
