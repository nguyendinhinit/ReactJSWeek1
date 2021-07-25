import React, {useEffect, useState} from 'react';
import {Container, Grid} from "@material-ui/core";
import axios from "axios";
import {useParams} from 'react-router-dom'
const Detail = () => {

    let { id } = useParams();
    console.log(id);
    const [post, setPost] = useState([{
        id: null,
        title: null,
        description: null,
        content: null
    }])

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/post/detail/'+id)
            .then(response => {
                // handle success
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, [])
    return (
        <>

            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>{post.title}</h1>
                        <h2>{post.description}</h2>
                        <p>{post.content}</p>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Detail;