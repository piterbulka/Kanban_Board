
import css from './button.module.scss'
import React from 'react';

export const Button = (props) => {
    return (
        <div className={`${props.className} ${ css.button}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
}
