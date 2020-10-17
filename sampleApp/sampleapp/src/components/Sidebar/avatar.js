import React from 'react'
import ava from './ava.jpg';
import classes from './avatar.module.css'

const Avatar = () => {
    return <div>
        <img src={ava} alt='avatar' className={classes.ava} />
    </div>
}

export default Avatar