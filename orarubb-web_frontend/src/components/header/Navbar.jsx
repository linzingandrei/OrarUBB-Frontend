import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Navbar.scss';
import {useMsal, useIsAuthenticated} from "@azure/msal-react";

const Navbar = () => {
    const {instance, accounts} = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const handleLoginClick = async () => {
        try {
            if (!isAuthenticated) {
                const loginResponse = await instance.loginPopup({
                    scopes: ["User.Read"],
                });
                console.log("Login response: ", loginResponse);
                console.log(isAuthenticated);
            } else {
                instance.logoutPopup();
            }
        } catch (error) {
            console.error("Login error: ", error);
        }
    };

    useEffect(() => {
        if (isAuthenticated && accounts.length > 0) {
            setUserName(accounts[0].name);
        } else {
            setUserName("");
        }
    }, [isAuthenticated, accounts]);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__left">
                    <button
                        className="navbar__link navbar__home-link"
                        onClick={() => navigate("/")}
                        title="Home"
                    >
                        <div className="navbar__icon home-icon" title="Home"></div>
                        <span>Home</span>
                    </button>

                </div>
                <div className="navbar__logo" title="Faculty Logo" onClick={() => navigate("/")}></div>
                <div className="navbar__right">
                    {isAuthenticated ? (
                        <>
                            <span className="navbar__greeting">Hi, {userName}!</span>
                            <button className="navbar__link" onClick={() => navigate("/my-schedule")}>
                                <span>My Schedule</span>
                            </button>
                            <button className="navbar__link" onClick={handleLoginClick}>
                                <span>Log Out</span>
                                <div className="navbar__icon logout-icon" title="Log Out"></div>
                            </button>
                        </>
                    ) : (
                        <button className="navbar__link" onClick={handleLoginClick}>
                            <span>Log In</span>
                            <div className="navbar__icon login-icon" title="Log In"></div>
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
