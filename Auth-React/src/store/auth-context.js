import React from 'react';

const authContext = React.createContext({
    token: '',
    isLogIn: false,
    login: (token) => {},
    logout: () => {}
});