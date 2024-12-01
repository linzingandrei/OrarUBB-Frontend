import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.scss';
import { useAuth } from '../../contexts/AuthContext';
import { usePath } from '../../contexts/PathContext';

const Navbar = () => {
    const { currentPath } = usePath();
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();
    const handleLoginClick = () => {
        if (isLoggedIn) {
            logout();
            navigate('/');
        } else {
            navigate('/authenticate');
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoForward = () => {
        navigate(1);
    };

    useEffect(() => {
        console.log('Current path:', currentPath);
    }, [currentPath]);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__logo" title="Faculty Logo" onClick={() => navigate("/")}></div>
                <div className="navbar__left">
                    <div className="navbar__navigation">
                        <button
                            className="navbar__nav-button navbar__back-button"
                            onClick={handleGoBack}
                            title="Go Back"
                        />
                        <button
                            className="navbar__nav-button navbar__forward-button"
                            onClick={handleGoForward}
                            title="Go Forward"
                        />
                        <div className="path">{currentPath === "/" ? "/home" : currentPath}</div>
                    </div>
                </div>


                <div className="navbar__right">
                    <div className="navbar__language navbar__romanian-lang" title="Romanian Lang Icon"></div>
                    <div className="navbar__language navbar__english_lang" title="English Lang Icon"></div>
                    {isLoggedIn ? (
                        <>
                            <button className="navbar__link">Orarul meu</button>
                            <button className="navbar__link" onClick={handleLoginClick}>
                                Log Out <div className="navbar__icon logout-icon" title="Log Out"></div>
                            </button>
                        </>
                    ) : (
                        <button className="navbar__link" onClick={handleLoginClick}>
                            Log In <div className="navbar__icon login-icon" title="Log In"></div>
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;