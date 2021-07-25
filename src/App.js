import React, {useState} from 'react';
import MainPage from "./pages/MainPage";
import {Route, Switch} from "react-router-dom";
import SignIn from "./pages/Login/Login";
import CurrentUserContext from "./context/CurrentUserContext";

const App = () => {
    const [currentUser, setCurrentUser] = useState("");
    return (
        <>
            <CurrentUserContext.Provider value={
                {
                    currentUser: currentUser,
                setCurrentUser:setCurrentUser
                }
            }>
                <Switch>
                    <Route path={"/login"}>
                        <SignIn/>
                    </Route>
                    <Route path={"/"}>
                        <MainPage/>
                    </Route>
                </Switch>
            </CurrentUserContext.Provider>
        </>
    );
};

export default App;