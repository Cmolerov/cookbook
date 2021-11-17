import React from "react";
import { NavLink } from "react-router-dom"; //switch
import UserMenu from "./UserMenu";
import LogoutButton from "./auth/LogoutButton";
// import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// style
import "./Navbar.css";
// import User from "./User";

const NavBar = ({ setAuthenticated, authenticated, user }) => {
    return (
        <div className="nav-wrapper_welcome" fluid>
            <div className="nav_bar-container">
                <div className="logo-wrapper">
                    <NavLink to="/" exact={true}>
                        <i className="fas fa-utensils icon"> Umami</i>
                    </NavLink>
                </div>
                <div className="link-wrapper">
                    {authenticated ? (
                        <>
                            <UserMenu
                                setAuthenticated={setAuthenticated}
                                className="user-menu"
                                user={user}
                            />
                        </>
                    ) : (
                        <>
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
                                {/* <li className="nav-links">
                                    <NavLink
                                        className="navbar-title"
                                        to="/users"
                                        exact={true}
                                        activeClassName="active"
                                    >
                                        Users
                                    </NavLink>
                                </li> */}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
