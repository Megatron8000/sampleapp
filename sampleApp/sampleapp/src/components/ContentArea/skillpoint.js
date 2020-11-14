import React from 'react'
import classes from './skillpoint.module.css'

const Skill = (props) => {
    return <div className={classes.cell}>
        {props.name} / {props.grade}
    </div>
}

export default Skill