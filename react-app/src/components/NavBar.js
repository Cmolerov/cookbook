import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// style
import "./Navbar.css";
const NavBar = ({ setAuthenticated }) => {
    return (
        <Container className="nav-wrapper" fluid>
            <Row>
                <Col className="logo-wrapper">
                    <h1>Logo</h1>
                </Col>
                <Col className="link-wrapper">
                    <ul className="navbar-container">
                        <li className="nav-links">
                            <NavLink
                                className="navbar-title"
                                to="/"
                                exact={true}
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-links">
                            <NavLink
                                className="navbar-title"
                                to="/login"
                                exact={true}
                                activeClassName="active"
                            >
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-links">
                            <NavLink
                                className="navbar-title"
                                to="/sign-up"
                                exact={true}
                                activeClassName="active"
                            >
                                Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-links">
                            <NavLink
                                className="navbar-title"
                                to="/users"
                                exact={true}
                                activeClassName="active"
                            >
                                Users
                            </NavLink>
                        </li>
                        <li className="nav-links">
                            <LogoutButton setAuthenticated={setAuthenticated} />
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default NavBar;
