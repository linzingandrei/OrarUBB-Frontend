import { useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLoginClick = () => {
      // This will toggle the login state for demonstration, we will replace it with real logic when available
      setIsLoggedIn(!isLoggedIn);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar__left">
          <div className="navbar__language navbar__romanian-lang" title="Romanian Lang Icon"></div>
          <div className="navbar__language navbar__english_lang" title="English Lang Icon"></div>
        </div>
  
        <div className="navbar__center">
          <div className="navbar__logo" title="Faculty Logo"></div>
        </div>
  
        <div className="navbar__right">
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
    );
  };
  
  export default Navbar;