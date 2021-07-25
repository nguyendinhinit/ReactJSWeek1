import React, {useContext} from 'react';
import Header from "../layout/Header/Header";
import Posts from "../components/Posts/Posts";
import Footer from "../layout/Footer/Footer";

import {Route, Switch} from "react-router-dom";
import Detail from "../components/Detail/Detail";
import Edit from "../components/Edit/Edit";
import CurrentUserContext from "../context/CurrentUserContext";


const MainPage = () => {
    const {currentUser} = useContext(CurrentUserContext);
    console.log(currentUser+" Mainpage.js");
    return (
        <>
            <Header/>
            <Switch>
                <Route path={"/posts"} component={Posts}/>
                <Route path={"/detail/:id"} component={Detail}/>
                <Route path={"/edit/:id"}>
                    <Edit/>
                </Route>

            </Switch>
            <Footer/>
        </>
    )
}
export default MainPage;