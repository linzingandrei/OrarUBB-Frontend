import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const resetForm = () => {
        setForm({
            username: "",
            password: "",
        });
    };

    const handleLoginClick = () => {
        // setIsLoggedIn(!isLoggedIn);
        setIsModalOpen(!isModalOpen);        
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
                            <>
                        <button className="navbar__link" onClick={handleLoginClick}>
                            <span>Log In</span>
                            <div className="navbar__icon login-icon" title="Log In"></div>
                        </button>
                            {isModalOpen && (
                                <div className="modal-overlay">
                                    <div className="modal">
                                    <form
                                        onSubmit={(e) => {
                                        e.preventDefault();
                                        handleAddOrUpdate();
                                        }}
                                    >
                                        <div className="crud-form-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={form.username}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        </div>
                                        <div className="crud-form-group">
                                        <label>Password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            value={form.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        </div>
                                        <button
                                            type="button"
                                            className="login-button"
                                            onClick={() => {
                                                var id = 0;
                                                if (form.username == "Popescu Alex") {
                                                    id = 1;
                                                }
                                                else if (form.username == "Ana Maria") {
                                                    id = 2;
                                                }
                                                else if (form.username == "Mihai Radu") {
                                                    id = 3;
                                                }
                                                localStorage.setItem("user", JSON.stringify({ unique_code: id, username: form.username, password: form.password }));

                                                setIsModalOpen(false);
                                                setIsLoggedIn(!isLoggedIn);
                                            }}
                                            >
                                            Login
                                        </button>
                                        <button
                                            type="button"
                                            className="cancel-button"
                                            onClick={() => {
                                                resetForm();
                                                setIsModalOpen(false);
                                            }}
                                            >
                                            Anulează
                                        </button>
                                    </form>
                                    </div>
                                </div>
                        )}</>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
