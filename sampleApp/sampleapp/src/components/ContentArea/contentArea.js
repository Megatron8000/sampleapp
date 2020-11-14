import React from 'react'
import classes from './contentArea.module.css'
import Skill from './skillpoint'

const ContentArea = () => {
  return <div className={classes.content}>
    <h1 className={classes.header}>My Skills</h1>
    <Skill name='Computer science' grade='Basic'/>
    <Skill name='Git' grade='Basic' />
    <Skill name='JavaScript' grade='Basic' />
    <Skill name='React' grade='Basic'/>
  </div>
}

export default ContentArea