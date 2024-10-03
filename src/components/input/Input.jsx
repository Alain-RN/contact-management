/* eslint-disable react/prop-types */
import React from 'react';

function Input(props) {
    var name = props.name.split("-").join(" ")

    
    return (
        <div className='labelyInput'>
            <label htmlFor={props.name} className='contact-label'>{name}</label>
            <br />
            <input 
                onChange={(e)=>props.onChange(e.target.value)}
                type={props.type} id={props.name}
                className='contact-input'
                placeholder={props.holder}/>
        </div>
    );
}

export default Input;