import React, { useState } from 'react';
import '../App.css';

const [ formState, setFormState ] = useState({
    name: '', 
    email: '', 
    password: '', 
});

const [ buttonDisabled, setButtonDisabled ] = useState(true);

const [ errors, setErrors ] = useState({
    name: '', 
    email: '', 
    password: '', 
});

const Form = () => {
    return (
      <div className="App">
          I am the Form component.
      </div>
    );
  }

export default Form