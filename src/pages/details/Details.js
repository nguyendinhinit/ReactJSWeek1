import React, {useEffect, useState} from 'react';
import {
    useParams
} from "react-router-dom";
import axios from "axios";

const Details = (props) => {
    const [detail, setDetail]= useState({
        id: null,
        title: null,
        userId: null,
        body: null
    })
    let {id} = useParams();
    console.log(id);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(response => {
                // handle success
                console.log(response);
                setDetail(response.data);
                // setIsLoading(false);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, [])
    return (
        <div>
            <p>Id: {detail.id}</p>
            <p>UserId: {detail.userId}</p>
            <p>title: {detail.title}</p>
            <p>content: {detail.body}</p>
        </div>
    );
};

export default Details;