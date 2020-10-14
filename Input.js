import React from "react"
import Icon from './Icon';
import style from 'style.css'

function Input(props) {
    const label = props.label;
    const defaultInput = props.default ? "default" : "";
    const helperText = props.paragraph;
    const errorInput = props.error ? "error-input" : "input";
    const disabledInput = props.disabled ? "disabled-input" : "";
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
                `}

            // ${props.startIcon ? <Icon name={props.startIcon} /> : ''}
            // ${props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''}
            />
            <p>{helperText}</p>
        </div>
    )
}

export default Input