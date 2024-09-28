import React from 'react';

function Button(props) {
    return (
        <button className={'button-contact '+ props.className}>
            {props.name}
        </button>
    );
}

export default Button;