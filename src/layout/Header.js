import React from 'react';
import {Col, Row} from "antd";
import 'antd/dist/antd.css';

const Header = () => {
    return (
        <>
            <Row>
                <Col span={18}>
                    <img alt={""}/>
                </Col>
                <Col span={6}>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>POST</li>
                        <li>CONTACT</li>
                    </ul>
                </Col>
            </Row>
        </>


    );
};

export default Header;