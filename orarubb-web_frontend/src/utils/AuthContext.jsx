import React, {createContext, useContext, useEffect, useState} from 'react';
import {useMsal, useIsAuthenticated} from "@azure/msal-react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const {instance, accounts} = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (isAuthenticated && accounts.length > 0) {
            setUserName(accounts[0].name);
            setUserId(accounts[0].homeAccountId);
        } else {
            setUserName("");
        }

    }, [isAuthenticated, accounts]);

    return (
        <AuthContext.Provider value={{isAuthenticated, userId, userName, instance, accounts}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};