import React, {useContext, useEffect, useState} from 'react';
import {Container, FormControl, Input, TextField, FormGroup, TableRow} from "@material-ui/core";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import '../../bootstrap.min.css';
import Button from "@material-ui/core/Button";
import {Form, Formik} from "formik";

const Edit = () => {

        const {currentUser} = useContext(CurrentUserContext);
        let {id} = useParams();
        let history = useHistory();
        const [post, setPost] = useState([{
            title: null,
            description: null,
            content: null
        }]);


        const authToken = 'Bearer ' + currentUser;
        useEffect(() => {
            axios.get('http://localhost:8080/api/v1/author/post/edit/' + id, {headers: {Authorization: authToken}})
                .then(response => {
                    console.log('Authorization', authToken)
                    // handle success
                    console.log(response);
                    setPost(response.data);
                    console.log('Post ', response.data);
                })
                .catch(error => {
                    // handle error
                    console.log(error)
                    if (error.response.status === 401 || 403) {
                        history.push("/login")
                    }
                });
        }, []);
        const [values, setValues] = useState({
            title: null,
            description: null,
            content: null
        })
        const handleOnChange = evt => {
            const name = evt.target.name;
            console.log("name: ", name);
        }
        const handleOnSubmit = ({setSubmitting}) => {
            // evt.preventDefault();
            setSubmitting(false);
            console.log("Handlesubmit running")

        }
        const onSubmit = (values, {setSubmitting}) => {
           let edit = {
               id: id,
               title: values.title,
               description: values.description,
               content: values.content
           }
            console.log(edit, "edit")
            axios
                .put(`http://localhost:8080/api/v1/author/post/edit/${id}`, edit
                ,{headers: {Authorization: authToken}})
                .then(response => {
                    console.log(response.data);
                    setSubmitting(false);
                    history.push("/posts");
                });
        };

        const initialValues = {
            title: post.title,
            description: post.description,
            content: post.content
        }
        return (
            <>
                <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={"true"}>
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <Container>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <FormControl className={"my-5"}>
                                        <Input name={"title"} value={values.title} onChange={handleChange}/>
                                    </FormControl>
                                    <FormControl className={"my-5"}>
                                        <Input name={"description"} value={values.description}
                                               onChange={handleChange}/>
                                    </FormControl>
                                    <FormControl className={"my-5"}>
                                        <TextField name={"content"} value={values.content}
                                                   variant="outlined"
                                                   onChange={handleChange}/>
                                    </FormControl>
                                </FormGroup>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Container>
                    )}
                </Formik>

            </>
        );
    }
;

export default Edit;