import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = (props) => {
    if (!props.authenticated) {
        return <Redirect to="/welcome" />;
    }

    return (
        <Route {...props}>
            {props.authenticated ? props.children : <Redirect to="/welcome" />}
        </Route>
    );
};
export default ProtectedRoute;
