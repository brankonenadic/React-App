import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const userIsLogIn = !!token;
    const logInHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };
    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };
    const contextValue = {
        token: token,
        isLoggedIn: userIsLogIn,
        login: logInHandler,
        logout: logOutHandler
    };
    return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>);
};
export default AuthContext;