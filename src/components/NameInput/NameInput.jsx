import React, {useState} from 'react';
import { useSetRecoilState} from 'recoil';
import styles from './NameInput.module.css';
import userState from '../../states'

const NameInput = () => {
    const [login, setLogin] = useState('')
    const setUser = useSetRecoilState(userState)

    return <div className={styles.nameInput}>
        <label>Enter your username: </label>
        <input type={`text`} name={`username-input`} onChange={(event) => {setLogin(event.target.value); } }/>
        <button onClick={() =>{
             setUser(login);
             }} >Login</button>
    </div>
};

export default NameInput;