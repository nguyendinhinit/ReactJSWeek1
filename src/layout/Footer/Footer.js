import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";
import '../../bootstrap.min.css'
const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="nav justify-content-center">
                <FontAwesomeIcon icon={faFacebook} size={"3x"} className={"mx-lg-4"}/>
                <FontAwesomeIcon icon={faInstagram} size={"3x"} className={"mx-lg-4"}/>
                <FontAwesomeIcon icon={faGithub} size={"3x"} className={"mx-lg-4"}/>
            </div>
            <div className="text-center">
                <p>Copyright &copy; Ocean Nguyen 2019</p>
            </div>
        </footer>
    );
};

export default Footer;