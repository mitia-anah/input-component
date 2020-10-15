import React from "react"
import Icon from './Icon';
import style from 'style.css'

function Input(props) {
    // const value = props.value;
    const label = props.label;
    const defaultInput = props.default ? "default" : "";
    const paragraph = props.paragraph;
    const errorInput = props.error ? "error-input" : "input";
    const disabledInput = props.disabled ? "disabled" : "";
    const size = props.size === 'sm' ? "sm" : "md";
    const fullWidth = props.size === 'fullWidth' ? "fullWidth" : "";
    const multiline = props.row === "4" ? "multiline" : "";
    let startIcon = props.startIcon === "phone" ? "startIcon" : "";
    let endIcon = props.endIcon === "padlock" ? "endIcon" : "";

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={`
                ${startIcon}
                ${endIcon}
                ${defaultInput}
                ${errorInput}
                ${disabledInput}
                ${size}
                ${fullWidth}
                ${multiline}
                `}
            />
            <p>{paragraph}</p>
        </div>
    )
}

export default Input