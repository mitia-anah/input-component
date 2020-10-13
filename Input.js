import React from "react"
import Icon from './Icon';

function Input(props) {
    const label = props.label || props.children;
    return (
        <div>
            <label>{label}</label>
            <input 
                type="text" 
                placeholder={props.placeholder}

                // ${props.startIcon ? <Icon name={props.startIcon} /> : ''}
                // ${props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''}
                />

			
			
        </div>
    )
}

export default Input