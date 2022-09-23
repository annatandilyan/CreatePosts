import React from 'react';

function Button({onClick}) {
    return (
        <div>
            <button onClick={onClick}>ADD</button>
        </div>
    );
}

export default Button;