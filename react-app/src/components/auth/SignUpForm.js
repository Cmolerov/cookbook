import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { signUp } from "../../services/auth";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { login } from "../../services/auth";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const history = useHistory();

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
    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const user = await login("demo@aa.io", "password");
        if (!user.errors) {
            setAuthenticated(true);
            history.push("/");
        }
    };

    return (
        <Container className="signup_main-container" fluid>
            <Row>
                <Col className="signup_left-container col-7"></Col>
                <Col className="signup_right-container col-md-5 col-sm-12 col-xs-12">
                    <div className="signup_form-container">
                        <form className="form_container" onSubmit={onSignUp}>
                            <div>
                                {errors.map((error) => (
                                    <div>{error}</div>
                                ))}
                            </div>
                            <div className="signup_form-wrapper">
                                <h1 className="form_title">Umami</h1>
                                <label className="signup_label">
                                    User Name
                                </label>
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
                                    Confirm Password
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
                            <button
                                onClick={handleDemoLogin}
                                className="btn-grad"
                            >
                                {" "}
                                Demo User
                            </button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpForm;
