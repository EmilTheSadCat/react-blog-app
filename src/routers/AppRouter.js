import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import MainFeedPage from "../components/MainFeedPage";
import PostPreview from "../components/PostPreview";
import PostPage from "../components/PostPage";
import PostCreatePage from "../components/PostCreatePage";
import PostEditPage from "../components/PostEditPage";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <>
            <Switch>
                <PublicRoute exact path="/" component={MainFeedPage} />
                <PublicRoute path={"/post/:id"} component={PostPage} />
                <PrivateRoute path={"/create"} component={PostCreatePage} />
                <PrivateRoute path={"/edit/:id"} component={PostEditPage} />
                <PrivateRoute
                    path="/dashboard"
                    component={DashboardPage}
                />

                <Route component={NotFoundPage} />
            </Switch>
        </>
    </Router>
);

export default AppRouter;
