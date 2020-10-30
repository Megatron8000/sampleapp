import React from 'react'
import classes from './contentArea.module.css'
import Skill from './skillpoint'

const ContentArea = () => {
    return <div className={classes.content}>
    <h1 className={classes.header}>My Skills</h1>
      <Skill />
    </div>
}

export default ContentArea