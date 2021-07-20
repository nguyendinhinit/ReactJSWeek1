import Navbar from "../../components/navbar/Navbar";

import React from 'react';
import SearchBox from "../../components/searchbox/SearchBox";
import {Box, Container} from "@material-ui/core";

const HomePage = () => {
    return (
        <Container>
            <Box>
                <Navbar/>
            </Box>
        </Container>
    )
};
export default HomePage;