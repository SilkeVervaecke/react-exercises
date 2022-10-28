import React from 'react';

const LogoutButton = () => {
    return <a href={`#`} onClick={() => console.log(`I clicked here`)}>Click here to logout</a>
};

export default LogoutButton;