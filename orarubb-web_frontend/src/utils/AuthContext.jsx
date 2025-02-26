import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMsal, useIsAuthenticated } from "@azure/msal-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const isDev = import.meta.env.MODE === "development";
    const { instance, accounts } = useMsal();
    const msalIsAuthenticated = useIsAuthenticated();

    const [isMockAuthenticated, setIsMockAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (isDev) {
            const storedAuth = localStorage.getItem("mockAuth");
            if (storedAuth) {
                const authData = JSON.parse(storedAuth);
                setIsMockAuthenticated(authData.isAuthenticated);
                setUserName(authData.userName);
                setUserId("mock-user-id-123");
            }
        } else if (msalIsAuthenticated && accounts.length > 0) {
            setUserName(accounts[0].name);
            setUserId(accounts[0].homeAccountId);
        } else {
            setUserName("");
        }
    }, [isDev, msalIsAuthenticated, accounts]);

    const contextValue = {
        instance,
        accounts,
        isAuthenticated: isDev ? isMockAuthenticated : msalIsAuthenticated,
        userName,
        userId,
        setIsMockAuthenticated,
        setUserName,
        setUserId,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

const mockLogin = (setIsMockAuthenticated, setUserName, setUserId) => {
    console.log("Mock login triggered");
    localStorage.setItem(
        "mockAuth",
        JSON.stringify({ userName: "Dev User", isAuthenticated: true })
    );
    setIsMockAuthenticated(true);
    setUserName("Dev User");
    setUserId("mock-user-id-123");
};

const mockLogout = (setIsMockAuthenticated, setUserName, setUserId) => {
    console.log("Mock logout triggered");
    localStorage.removeItem("mockAuth");
    setIsMockAuthenticated(false);
    setUserName("");
    setUserId("");
};

export const useAuth = () => {
    const auth = useContext(AuthContext);
    const isDev = import.meta.env.MODE === "development";

    const login = async () => {
        if (isDev) {
            mockLogin(auth.setIsMockAuthenticated, auth.setUserName, auth.setUserId);
        } else {
            try {
                await auth.instance.loginPopup({
                    scopes: ["User.Read"],
                });
            } catch (error) {
                console.error("Login error:", error);
            }
        }
    };

    const logout = async () => {
        if (isDev) {
            mockLogout(auth.setIsMockAuthenticated, auth.setUserName, auth.setUserId);
        } else {
            try {
                await auth.instance.logoutPopup();
            } catch (error) {
                console.error("Logout error:", error);
            }
        }
    };

    return {
        ...auth,
        login,
        logout,
    };
};
