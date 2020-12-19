import React from 'react'
import classes from './form.module.css'


let buttonAction = () => {
    alert('Click')
}
const Form = () => {
    return <div className={classes.form}>
        <h1 className={classes.header}>Add new skill</h1>
        <div className={classes.center}>
            <form className={classes.form}>
                <label>
                    Enter your skill <input type="text" name="skill" className={classes.field} />
                </label>
                <br />
                <label>
                    Enter your grade  <input type="text" name="grade" className={classes.field} />
                </label>
                <button onClick={buttonAction} className={classes.button}>Add skill!</button>
            </form>
            
        </div>
    </div>
}
export default Form