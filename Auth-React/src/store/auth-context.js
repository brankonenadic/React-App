import React, { useState } from 'react';

const authContext = React.createContext({
    token: '',
    isLogIn: false,
    login: (token) => { },
    logout: () => { }
});

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const userIsLogIn = !!token;
    const logInHandler = () => {
        setToken(token);
    };
    const logOutHandler = () => {
        settoken(null);
    };
    return
    <authContext.Provider>{props.children}</authContext.Provider>
};