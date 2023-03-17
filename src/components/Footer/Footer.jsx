import React from 'react';
import {useRecoilValue} from 'recoil';
import LogoutButton from './LogoutButton/LogoutButton';

import styles from './Footer.module.css';
import userState from '../../states'
const Footer = () => {
  const user = useRecoilValue(userState)

  return <div className={styles.footer}>
      <hr/>
      <h2>You are logged in as: {user}</h2>
      <LogoutButton/>
  </div>
};

export default Footer;