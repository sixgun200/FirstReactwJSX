import React from 'react';

const PersonCard = (props) => (
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <h4>Age: {props.age}</h4>
        <h4>Hair Color: {props.hairColor}</h4>
    </div>
);

export default PersonCard