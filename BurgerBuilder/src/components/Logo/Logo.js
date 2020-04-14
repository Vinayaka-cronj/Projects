import React from 'react';
import BurgerLogo from '../../assets/Images/Logo-Burger.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="MyLogo" />
  </div>
);

export default logo;
