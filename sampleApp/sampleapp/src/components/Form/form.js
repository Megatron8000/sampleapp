import React from 'react'
import classes from './form.module.css'


let buttonAction = () => {
    alert('Click')
}

const Form = () => {
    return <div className={classes.form}>
        <h1 className={classes.header}>Add new skill</h1>
        <div className={classes.center}>
            <button onClick={buttonAction} className={classes.button}>Add skill!</button>
        </div>
    </div>
}
export default Form