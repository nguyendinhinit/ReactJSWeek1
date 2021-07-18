import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {
    const[user, setUser] = useState({
        name: null,
        id: null
    })
    useEffect(() => {
        axios.get('https://60dff0ba6b689e001788c858.mockapi.io/users/3')
            .then(response => {
                // handle success
                console.log(response);
                setUser(response.data);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, [])
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </div>
    );
};

export default Profile;