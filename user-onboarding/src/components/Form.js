import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
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

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({
                    ...errors, 
                    [e.target.name]: ""
                })
            })
            .catch((err) => {
                console.log(err);
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    }

    const inputChange = (e) => {
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
    }

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is required"), 
        email: yup.string().email("Make sure you enter a valid email").required("Must include an email"), 
        password: yup.string().required('Password is required')
    })

    return (
      <div className="App">
        <FormContainer onSubmit={formSubmit}>
            <FormGroup>
                <Label htmlFor="label">Name:</Label>
                <Input id="label" name="name" onChange={inputChange} />
                <Label htmlFor="label">Email:</Label>
                <Input id="label" name="email" onChange={inputChange} />
                <Label htmlFor="label">Password:</Label>
                <Input id="label" name="password" onChange={inputChange} />
                <Button primary>Primary</Button>
            </FormGroup>
        </FormContainer>
      </div>
    );
  }

export default Form