import React from 'react'
import classes from './contentArea.module.css'
import Skill from './skillpoint'


const ContentArea = () => {
    return <div className={classes.content}>
      <Skill />
    </div>
}
export default ContentArea