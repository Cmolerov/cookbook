import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    useHistory,
    Redirect,
} from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import CreateRecipe from "./components/CreateRecipe";
import SingleRecipe from "./components/SingleRecipe";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState({});
    const history = useHistory();
    useEffect(() => {
        (async () => {
            const userData = await authenticate();
            if (!userData.errors) {
                setUser(userData);
                setAuthenticated(true);
            }
            setLoaded(true);
        })();
    }, [authenticated]);

    useEffect(() => {
        if (!authenticated) return <Redirect to="/welcome" />;
    }, [history]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar
                setAuthenticated={setAuthenticated}
                authenticated={authenticated}
                user={user}
            />

            <Switch>
                <Route exact path="/welcome">
                    <WelcomePage
                        setAuthenticated={setAuthenticated}
                        authenticated={authenticated}
                    />
                </Route>
                <Route path="/login" exact={true}>
                    <LoginForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <Route path="/sign-up" exact={true}>
                    <SignUpForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <ProtectedRoute
                    path="/users"
                    exact={true}
                    authenticated={authenticated}
                >
                    <UsersList />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/users/:userId"
                    exact={true}
                    authenticated={authenticated}
                >
                    <User />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/"
                    exact={true}
                    authenticated={authenticated}
                >
                    <HomePage />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/recipes/:id"
                    exact={true}
                    authenticated={authenticated}
                >
                    <SingleRecipe user={user} />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/profile/:userId"
                    exact={true}
                    authenticated={authenticated}
                >
                    <Profile />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/createrecipe"
                    exact={true}
                    authenticated={authenticated}
                >
                    <CreateRecipe user={user} />
                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
