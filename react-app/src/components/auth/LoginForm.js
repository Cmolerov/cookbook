import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

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
        <Container className="signup_main-container" fluid>
            <Row>
                <Col className="login_left-container col-7"></Col>
                <Col className="signup_right-container col-5">
                    <div className="signup_form-container">
                        <form className="form_container" onSubmit={onLogin}>
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
                                <label
                                    className="signup_label"
                                    htmlFor="password"
                                >
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
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
