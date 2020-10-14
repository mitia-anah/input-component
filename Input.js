import React from "react"
import Icon from './Icon';
import style from 'style.css'

function Input(props) {
    const label = props.label;
    const defaultInput = props.default ? "default" : "";
    const paragraph = props.paragraph;
    const errorInput = props.error ? "error-input" : "input";
    const disabledInput = props.disabled ? "disabled-input" : "";
    const size = props.size === 'sm' ? "sm" : "md";
    const fullWidth = props.fullWidth ? "fullWidth" : "";

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                placeholder={props.placeholder}
                className={`
                ${defaultInput}
                ${errorInput}
                ${disabledInput}
                ${size}
                `}
            />
            <p>{paragraph}</p>
        </div>
    )
}

export default Input