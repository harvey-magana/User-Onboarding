import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from "axios";
import '../App.css';

const FormContainer = styled.form`
	color: #2196f3;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const FormGroup = styled.div`
	color: #2196f3;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: #2196f3;
    display: block;
`;

const Input = styled.input`
	padding: 0.5em;
	color: #2196f3;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2196f3;
  border-radius: 3px;
`;

const Form = () => {
    const [ formState, setFormState ] = useState({
        name: '', 
        email: '', 
        password: '' 
    })

    const [ buttonDisabled, setButtonDisabled ] = useState(true);

    const [ errors, setErrors ] = useState({
        name: '', 
        email: '', 
        password: '', 
    });

    const [ post, setPost ] = useState([])

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    }

    const inputChange = (e) => {
        e.persist();
        const newFormData = {
            ...formState, 
            [e.target.name]: e.target.value
        }
        validateChange(e);
        setFormState(newFormData);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post("https://reqres.in/api/users")
            .then((res) => {
                setPost(res.data);
                setFormState({
                    name: '', 
                    email: '', 
                    password: '', 
                })
            })
            .catch((err) => console.log(err.response));
    }

    useEffect(() => {
        formSchema.isValid(formState).then((isValid) => {
            setButtonDisabled(!isValid)
        });
    }, [formState])

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required"), 
        email: yup
            .string()
            .email("Make sure you enter a valid email")
            .required("Must include an email"), 
            password: yup
            .string()
            .min(6, "Passwords must be at least 6 characters long.")
            .required("Password is Required")
    });

    return (
      <div className="App">
        <FormContainer onSubmit={formSubmit}>
            <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input 
                    id="label" 
                    name="name" 
                    onChange={inputChange} 
                    value={formState.name}
                />
                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
                <Label htmlFor="email">Email:</Label>
                <Input 
                    id="label" 
                    name="email" 
                    onChange={inputChange} 
                    value={formState.email}
                />
                {errors.email.length > 0 ? <p>{errors.email}</p> : null}
                <Label htmlFor="password">Password:</Label>
                <Input 
                    id="label" 
                    name="password" 
                    onChange={inputChange} 
                    value={formState.password}
                />
                {errors.password.length > 0 ? <p>{errors.password}</p> : null}
                <Button disabled={buttonDisabled} primary>Primary</Button>
            </FormGroup>
        </FormContainer>
      </div>
    );
  }

export default Form