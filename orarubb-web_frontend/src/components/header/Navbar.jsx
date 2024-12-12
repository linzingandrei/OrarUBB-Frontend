import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // This will toggle the login state for demonstration, we will replace it with real logic when available
        setIsLoggedIn(!isLoggedIn);
    };



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
                    {isLoggedIn ? (
                        <>
                            <button className="navbar__link" onClick={() => navigate("/my-schedule")}>
                                <span>Orarul meu</span>
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
