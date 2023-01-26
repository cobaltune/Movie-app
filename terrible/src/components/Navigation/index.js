import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../../img/logo.png';

function Navigation() {
  return (
    <div className={styles.logo}>
      <Link to={`/`}>
        <img src={logo}></img>
      </Link>
    </div>
  );
}

export default Navigation;
