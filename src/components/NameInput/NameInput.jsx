import React from 'react';

import styles from './NameInput.module.css';

const NameInput = () => {
    return <div className={styles.nameInput}>
        <label>Enter your username: </label>
        <input type={`text`} name={`username-input`} onChange={(event) => console.log(event.target.value)}/>
    </div>
};

export default NameInput;