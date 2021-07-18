import '../../style/style.scss'
import Home from "../home/Home"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Post from "../posts/Post";
import React from "react";
import Login from "../../pages/login/Login";
import Profile from "../Profile/Profile";
import Details from "../../pages/details/Details";


const Navbar = () => {

    return (
        <Router>
            <ul className={"d-flex justify-content-between list-group"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><Link to={"/homepage"}>Home</Link></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><Link to={"/post"}>Post</Link></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><Link to={"/profile"}>Profile</Link></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
            <Switch>
                <Route path="/homepage">
                    <Home/>
                </Route>
                <Route path={"/post"}>
                    <Post/>
                </Route>
                <Route path={"/detail/:id"}>
                    <Details/>
                </Route>
                <Route path={"/login"}>
                    <Login/>
                </Route>
                <Route path={"/profile"}>
                    <Profile/>
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar;