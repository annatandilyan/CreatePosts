import React from 'react';

function Input({value, placeholder, onChange}) {
    return (
        <div>
            <input value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    );
}

export default Input;