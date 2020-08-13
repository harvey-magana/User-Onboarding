import React from 'react';
import styled from 'styled-components';
import '../App.css';

const MemberGroup = styled.div`
	color: #2196f3;
  display: block;
	width: 300px;
  margin: 50px auto;
`;

console.log(MemberGroup);
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
    console.log(props.formInput)
    return (
        <div>

        </div>
    )
}


export default DisplayForm