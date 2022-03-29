import React from 'react'
import './input.css'

const Input = (props) => {
    // props destructing
    const {htmlFor, label, type, name, id, value, onChange} = props;
    return (
        <div className="form-input">
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} name={name} id={id} autoComplete='off'
                required
                value={value}
                onChange={onChange}
                data-testid="inputField"
            />
        </div>
    )
}

export default Input