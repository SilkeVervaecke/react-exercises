import React from 'react';
import HeaderTitle from './HeaderTitle/HeaderTitle';

import styles from './Header.module.css';

const Header = () => {
    return <div className={styles.header}>
        <HeaderTitle/>
        <hr/>
    </div>
};

export default Header;