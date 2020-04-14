import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerclosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxiliary>
        <ToolBar drawerTogglerClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerclosedHandler}
        />
        <main className={Classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
