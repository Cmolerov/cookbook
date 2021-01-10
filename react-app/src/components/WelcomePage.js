import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "./../services/auth";

export default function WelcomePage({ setAuthenticated }) {
    const history = useHistory();
    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const user = await login("demo@aa.io", "password");
        if (!user.errors) {
            setAuthenticated(true);
            history.push("/");
        }
    };
    console.log(window.location.pathname);
    return (
        <Container className="welcome_wrapper" fluid>
            <Row>
                <Col className="col-7">
                    <div className="header-text_wrapper">
                        <p className="welcome-text">Welcome to Umami</p>
                        <h1 className="header-text">
                            The Ultimate <br /> CookBook <br /> App.
                        </h1>
                        <p className="welcome-text_about">
                            On the site you will find recipes for many of the
                            most popular dishes, as well as a number of
                            traditional recipes that you can explore.
                        </p>
                        <button
                            onClick={handleDemoLogin}
                            className="demo-btn_welcome bn632-hover"
                        >
                            {" "}
                            Demo User
                        </button>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
