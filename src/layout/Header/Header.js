import React, {useContext} from 'react';
import '../../bootstrap.min.css'
import logo from '../../resources/ocean_logo.png'
import './Header.css';
import {Link} from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";


const Header = () => {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    return (
        <div>
            <header className={"container-fluid bg"}>
                <div className={"container d-flex pt-3"}>
                    <div className={"col-lg-8"}>
                        <img src={logo} alt="" className={"position-relative w-auto logo"}/>
                    </div>
                    <div className={"col m-auto z1"}>
                        <ul className={"nav "}>
                            <li className={"nav-item"}>
                                <Link className={"nav-link text-light active"} to={"/homepage"}>HOME</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link text-light active"} to={"/about"}>ABOUT</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link text-light  active"} to={"/posts"}>POST</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link text-light active"} to={"/contact"}>CONTACT</Link>
                            </li>
                            {currentUser === ""
                                ?
                                <li className={"nav-item"}>
                                    <Link to={"/login"} className={"nav-link text-light active"}>LOGIN</Link>
                                </li>
                                :
                                <li className={"nav-item"}>
                                    <Link to={""} className={"nav-link text-light active"} onClick={() => {
                                        setCurrentUser("")
                                    }}>LOGOUT</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="position-relative text-center text-light pt-lg-5 z1">
                    <h1>Ocean Nguyen</h1>
                    <p>Engineer/Video Creator</p>
                </div>
            </header>
            <div className="overlay position-absolute"/>
        </div>
    );
};

export default Header;