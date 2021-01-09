import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WelcomePage() {
    console.log(window.location.pathname);
    return (
        <Container className="welcome_wrapper" fluid>
            <Row>
                <Col className="col-7">
                    <div className="header-text_wrapper">
                        <p className="welcome-text">The Cookbook App</p>
                        <h1 className="header-text">
                            The Ultimate <br /> CookBook <br /> App.
                        </h1>
                        <p className="welcome-text_about">
                            On the site you will find recipes for many of the
                            most popular dishes, as well as a number of
                            traditional recipes that you can explore.
                        </p>
                        <button className="demo-btn_welcome"> Demo User</button>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
