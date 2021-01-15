import React, { useState, useRef } from "react";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { logout } from "../services/auth";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
    label: {
        textTransform: "capitalize",
    },
});

// const UserMenuContainer = styled.div`
//     display: flex;
//     border: 2px solid transparent;
//     border-radius: 10px;
//     padding: 10px;
//     align-items: center;
//     background-color: #fff;
//     cursor: pointer;
//     width: 100px;
//     justify-content: space-around;
//     &:hover {
//         box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
//             0px 1px 1px -2px rgba(0, 0, 0, 0.12),
//             0px 1px 3px 0px rgba(0, 0, 0, 0.2);
//     }

//     &:focus {
//         box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
//             0px 1px 1px -2px rgba(0, 0, 0, 0.12),
//             0px 1px 3px 0px rgba(0, 0, 0, 0.2);
//     }
// `;

// const UserMenuPopUp = styled(Menu)`
//     margin-top: 65px;
//     padding: 10px;
// `;

// const UserMenuPopUpItem = styled(MenuItem)`
//     margin-right: 300px;
// `;

const UserMenuPopUp = styled(Menu)`
    margin-top: 65px;
    padding: 10px;
`;

const UserMenuPopUpItem = styled(MenuItem)``;

const UserMenuContainerAuth = styled.div`
    display: flex;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 10px;
    width: 90px;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 0px 3px rgba(163, 214, 223, 0.5);
    justify-content: flex-end;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 800px;
`;

export default function UserMenu({ authenticated, setAuthenticated }) {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogout = async (e) => {
        await logout();
        history.push("/welcome");
        setAuthenticated(false);
        setAnchorEl(null);
        history.push("/welcome");
    };
    const onProfile = async (e) => {
        history.push("/profile");
    };
    const onCreate = async (e) => {
        history.push("/createrecipe");
    };

    return (
        <>
            <UserMenuContainerAuth
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon
                    style={{ color: "#437486", marginRight: "5px" }}
                ></MenuIcon>
                <AccountCircleIcon
                    fontSize="large"
                    style={{ color: "#437486" }}
                ></AccountCircleIcon>{" "}
            </UserMenuContainerAuth>

            <UserMenuPopUp
                classes={{ root: classes.root }}
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <UserMenuPopUpItem onClick={onProfile}>
                    Profile
                </UserMenuPopUpItem>
                <UserMenuPopUpItem onClick={onCreate}>
                    Create Recipe
                </UserMenuPopUpItem>
                <UserMenuPopUpItem onClick={onLogout}>Logout</UserMenuPopUpItem>
            </UserMenuPopUp>
        </>
    );
}
