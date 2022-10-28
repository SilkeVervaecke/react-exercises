import React from 'react';
import LogoutButton from './LogoutButton/LogoutButton';

import styles from './Footer.module.css';

const Footer = () => {
  return <div className={styles.footer}>
      <hr/>
      <h2>You are logged in as: X</h2>
      <LogoutButton/>
  </div>
};

export default Footer;