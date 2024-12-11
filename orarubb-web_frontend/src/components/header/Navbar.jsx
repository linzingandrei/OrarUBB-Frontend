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

    const handleOldVersionClick = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // getMonth() returns 0-11, so we add 1

        const semester = (month >= 9 || month <= 2) ? 1 : 2;

        window.open('https://www.cs.ubbcluj.ro/files/orar/' + year + '-' + semester, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__logo" title="Faculty Logo" onClick={() => navigate("/")}></div>

                <div className="navbar__left">
                    <button
                        className="navbar__link navbar__home-link"
                        onClick={() => navigate("/")}
                        title="Home"
                    >
                        <div className="navbar__icon home-icon" title="Home"></div>
                    </button>
                    <button
                        className="navbar__link navbar__old-version-link"
                        onClick={handleOldVersionClick}
                        title="Old Website Version"
                    >
                        Original Website <div className="navbar__icon old-version-icon" title="Old Version"></div>
                    </button>
                </div>

                <div className="navbar__right">
                    {isLoggedIn ? (<>
                        <button className="navbar__link" onClick={() => navigate("/my-schedule")}>Orarul meu</button>
                        <button className="navbar__link" onClick={handleLoginClick}>
                            Log Out <div className="navbar__icon logout-icon" title="Log Out"></div>
                        </button>
                    </>) : (<button className="navbar__link" onClick={handleLoginClick}>
                        Log In <div className="navbar__icon login-icon" title="Log In"></div>
                    </button>)}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;