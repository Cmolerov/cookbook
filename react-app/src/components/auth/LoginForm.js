import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ authenticated, setAuthenticated }) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (!user.errors) {
            setAuthenticated(true);
        } else {
            setErrors(user.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="signup_main-container">
            <div className="login_left-container"></div>
            <div className="signup_right-container">
                <div className="signup_form-container">
                    <form onSubmit={onLogin}>
                        <div>
                            {errors.map((error) => (
                                <div>{error}</div>
                            ))}
                        </div>
                        <div className="signup_form-wrapper">
                            <h1 className="form_title">Umami</h1>
                            <label className="signup_label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="signup_input"
                                name="email"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={updateEmail}
                            />
                        </div>
                        <div className="signup_form-wrapper">
                            <label className="signup_label" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="signup_input"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={updatePassword}
                            />
                            <button className="btn-grad" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
