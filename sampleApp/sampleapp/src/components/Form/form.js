import React from 'react'
import classes from './form.module.css'


let buttonAction = () => {
    alert('Click')
}

const Form = () => {
    return <div className={classes.form}>
        <h1 className={classes.header}>Add new skill</h1>
        <div className={classes.center}>
            <form>
                <label>
                    Name: <input type="text" name="name" />
                </label>
                <label>
                    Skill: <input type="text" name="skill" />
                </label>
            </form>
            <button onClick={buttonAction} className={classes.button}>Add skill!</button>
        </div>
    </div>
}
export default Form