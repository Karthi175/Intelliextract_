import React from 'react';
import classes from "./Modal.module.css";

import closeImg from "./close.png";
const Modal = (props) => {
    const closeHandler = () => {
        props.onCancel();
    }
    return (
        <div className={classes.modal} style={{width: props.width ? props.width : null}}>
            <div className={classes.header}>
                {props.title}
                <span className={classes.FloatRight} >X</span>
            </div>
            <div className={classes.body}>
                {props.children}
            </div>
        </div>
    );
}
export default Modal;