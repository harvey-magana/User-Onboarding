import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';

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
                });
            });
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

    return (
      <div className="App">
          I am the Form component.
      </div>
    );
  }

export default Form