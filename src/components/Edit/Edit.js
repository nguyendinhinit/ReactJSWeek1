import React, {useContext, useEffect, useState} from 'react';
import {Container, FormControl, Input, TextField} from "@material-ui/core";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";

const Edit = () => {
    const {currentUser} = useContext(CurrentUserContext);
    console.log(currentUser," from edit.js")
    let {id} = useParams();
    let history = useHistory();
    const [post, setPost] = useState([{
        id: null,
        title: null,
        description: null,
        content: null
    }]);
    console.log("Edit");
    console.log(currentUser);

    const authToken ='Bearer '+currentUser;

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/author/post/edit/' + id, {headers: {Authorization: authToken}})
            .then(response => {
                console.log('Authorization', authToken)
                // handle success
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                // handle error
                console.log(error)
                if (error.response.status === 401 || 403) {
                    history.push("/login")
                }
            });
    }, []);
    return (
        <div>
            <Container>
                <FormControl>
                    <Input id="my-title" aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl>
                    <Input id="my-description" aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                </FormControl>
            </Container>
        </div>
    );
};

export default Edit;