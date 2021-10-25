import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedI: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const userIsLogIn = !!token;
    const logInHandler = () => {
        setToken(token);
    };
    const logOutHandler = () => {
        setToken(null);
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