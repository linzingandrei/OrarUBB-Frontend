import Layout from "../../components/layout/Layout";
import { useState } from 'react';
import "./LoginPage.scss";
import { checkAuthentication } from '../../services/loginService';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        const res = checkAuthentication(email, password)
        if (res) {
            login(); // Call the login function from context
            navigate('/');
        } else {
            alert('Authentication failed. Please check your email and password.');
        }
    }

    return (
        <Layout>
            <div className="background-wrapper">
                <div className="login-container">
                    <div className="login-card">
                        <h2 className="login-title">Log In</h2>
                        <form>
                            <p className="login-subtitle">*Use SCS Credentials to Log In</p>
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input-field"
                                    value={email}  // Bind input to state
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                    placeholder="Password"
                                    className="input-field"
                                    value={password}  // Bind input to state
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className="icon eye-icon"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? '🔒' : '👁️‍🗨️'}
                                </span>
                            </div>
                            <button type="submit" className="login-button" onClick={handleLoginClick}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage;
