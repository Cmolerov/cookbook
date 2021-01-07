import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const user = await signUp(username, email, password);
            if (!user.errors) {
                setAuthenticated(true);
            }
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="signup_main-container">
            <div className="signup_left-container"></div>
            <div className="signup_right-container">
                <div className="signup_form-container">
                    <form onSubmit={onSignUp}>
                        <div>
                            {errors.map((error) => (
                                <div>{error}</div>
                            ))}
                        </div>
                        <div className="signup_form-wrapper">
                            <h1 className="form_title">Umami</h1>
                            <label className="signup_label">User Name</label>
                            <input
                                className="signup_input"
                                type="text"
                                name="username"
                                onChange={updateUsername}
                                value={username}
                            ></input>
                        </div>
                        <div className="signup_form-wrapper">
                            <label className="signup_label">Email</label>
                            <input
                                className="signup_input"
                                type="text"
                                name="email"
                                onChange={updateEmail}
                                value={email}
                            ></input>
                        </div>
                        <div className="signup_form-wrapper">
                            <label className="signup_label">Password</label>
                            <input
                                className="signup_input"
                                type="password"
                                name="password"
                                onChange={updatePassword}
                                value={password}
                            ></input>
                        </div>
                        <div className="signup_form-wrapper">
                            <label className="signup_label">
                                Repeat Password
                            </label>
                            <input
                                className="signup_input"
                                type="password"
                                name="repeat_password"
                                onChange={updateRepeatPassword}
                                value={repeatPassword}
                                required={true}
                            ></input>
                        </div>
                        <button className="btn-grad" type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
