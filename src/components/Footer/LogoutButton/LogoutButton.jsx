import React from 'react';
import { useSetRecoilState} from 'recoil';
import userState from '../../../states'

const LogoutButton = () => {
  const setUser=useSetRecoilState(userState)

    return <button href={`#`} onClick={() =>{
        console.log(`I clicked here`);
        setUser('X')
    } }>Click here to logout</button>
};

export default LogoutButton;