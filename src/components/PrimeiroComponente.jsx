import React from 'react';

let isLegal = false;

export default (props) =>  
    <div>
        <h1>{ props.valor }</h1>
        <p>{isLegal ? 'sim' : 'não'}</p>
        <p>{Math.random()}</p>
    </div>;