import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import SearchBox from "../searchbox/SearchBox";
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import Home from "../home/Home";
import Details from "../../pages/details/Details";

const Post = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({
        userId: null,
        id: null,
        title: null,
        body: null
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // handle success
                console.log(response);
                setPost(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, [])
    if (isLoading) {
        return (
            <div>
                Loading
            </div>
        );
    } else {
        return (
            <div>
                <SearchBox listpost={post}/>
                {
                    post.map(p =>
                        <div key={p.id}>
                            <Link to={{pathname: `/detail/${p.id}`}}>User ID: {p.userId}</Link>
                            <p>Post ID: {p.id}</p>
                            <p>Post title: {p.title}</p>
                            <p>Post content: {p.body}</p>
                        </div>
                    )
                }
            </div>
        );
    }
};


export default Post;