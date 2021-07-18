import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom"

const Login = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(
        {
            token: null,
            userId: null
        }
    );
    const handleChangeUsername = evt => {
        setUsername(evt.target.value)
    }
    const handleChangePassword = evt => {
        setPassword(evt.target.value)

    }
    const validateForm = () => {
        return username.length > 0 && password.length >= 8;
    }
    const apiUrl = 'http://localhost:3000/api'

    // const authAxios = axios.create({
    //     baseURL:apiUrl,
    //     headers:{
    //         Authorization: `Bearer ${token.token}`,
    //     },
    // });
    const login = () =>{
        axios.get('https://60dff0ba6b689e001788c858.mockapi.io/token')
            .then(response => {
                // handle success
                console.log(response);
                localStorage.setItem("profile",JSON.stringify(response.data));
                history.push("/homepage");
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }
    return (
        <div>
            <form action={"/homepage"}>
                <input name={"username"} placeholder={"username"} value={username} onChange={handleChangeUsername}/>
                <input name={"password"} placeholder={"password"} value={password} onChange={handleChangePassword}/>
                <button onClick={login} disabled={!validateForm()}>
                    Submit
                </button>

            </form>
        </div>
    );
};

export default Login;