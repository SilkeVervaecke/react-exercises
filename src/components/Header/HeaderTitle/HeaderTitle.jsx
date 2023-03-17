import React from 'react';
import { useRecoilValue} from 'recoil';
import userState from '../../../states'

const HeaderTitle = () => {
  const user = useRecoilValue(userState)

    return <h2>Welcome to this beautiful page: user {user}</h2>
};

export default HeaderTitle;