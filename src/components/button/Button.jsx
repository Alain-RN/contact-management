/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({type, className, handleAction, name}) {
    return (
        <button 
            type={type}
            className={'button-contact '+ className}
            onClick={handleAction}
             >
            {name}
        </button>
    );
}

export default Button;