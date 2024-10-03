/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {

    return (
        <button 
            type={props.type}
            className={'button-contact '+ props.className}
            onClick={props.handleAction}
             >
            {props.name}
        </button>
    );
}

export default Button;