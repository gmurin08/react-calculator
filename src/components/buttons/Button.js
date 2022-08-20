import {useState} from 'react'
import clsx from 'clsx'

export default function Button(props){
    const {isZero, isDigit, isOp, isMod, children} = props;
    
    const classes = clsx({
        "btn-digit": isDigit,
        "btn-zero": isZero,
        "btn-op": isOp,
        'btn-mod': isMod
    })

    return(
        <button value={children} onClick={props.handleClick} className={classes}>{children}</button>
    )
}