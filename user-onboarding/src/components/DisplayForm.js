import React from 'react';
import styled from 'styled-components';
import '../App.css';

const MemberGroup = styled.div`
	color: #2196f3;
  display: block;
	width: 300px;
  margin: 50px auto;
`;

const MemberTitle = styled.h2`
	margin-bottom: 0.5em;
	color: #2196f3;
    display: block;
`;

const Member = styled.p`
	margin-bottom: 0.5em;
	color: #2196f3;
    display: block;
`;

const DisplayForm = (props) => {
    console.log(Object.values(props.formInput))
    return (
        <div>
            {Object.keys(props.formInput).map(form => (
            <MemberGroup key={form.id}>
                <MemberTitle>{form.name}</MemberTitle>
                <Member>{form.email}</Member>
                <Member>{form.password}</Member>
            </MemberGroup>
            ))}
        </div>
    )
}


export default DisplayForm