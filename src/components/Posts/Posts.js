import React, {useEffect, useState} from 'react';
import '../../bootstrap.min.css'
import {Button} from "@material-ui/core";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {green, yellow} from "@material-ui/core/colors";
import {useHistory} from "react-router-dom";
import axios from "axios";

const Posts = () => {
    let history = useHistory();
    const theme = createTheme({
        palette: {
            primary: green,
            secondary: yellow
        },
    });


    const [posts, setPosts] = useState([{
        id: null,
        title: null,
        description: null,
        content: null
    }])

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/post/homepage')
            .then(response => {
                // handle success
                console.log(response);
                setPosts(response.data);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, [])

    return (
        <>
            <div className={"container-fluid mt-5"}>
                <div className={"container clearfix"}>
                    <div className="list-group">
                        {posts.map(post => (
                            <div key={post.id} className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between ">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p className="mb-1">{post.title}.</p>
                                <small>{post.description}.</small>
                                <div className={"container-fluid m-0"}>
                                    <ThemeProvider theme={theme}>
                                        <Button className={"float-end"} variant={"contained"}
                                                color={"secondary"} onClick={() => history.push(`/edit/${post.id}`)}>Edit</Button>
                                        <Button className={"float-end"} variant={"contained"}
                                                color={"secondary"} onClick={() => history.push(`/detail/${post.id}`)}>Detail</Button>
                                    </ThemeProvider>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant={"contained"} color={"primary"} className="float-end mt-5">View
                        All Posts
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Posts