import React, { useState } from 'react';
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

    
    const inputChange = (e) => {
        const newFormData = {
            ...formState, 
            [e.target.name]: e.target.value
        }
        validateChange(e);
        setFormState(newFormData);
    }

    return (
      <div className="App">
          I am the Form component.
      </div>
    );
  }

export default Form