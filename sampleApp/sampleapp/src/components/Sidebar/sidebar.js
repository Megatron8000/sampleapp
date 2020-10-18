import React from 'react'
import Avatar from './avatar'
import classes from './sidebar.module.css'
import SocialButtons from './social'

const Sidebar = () => {
    return <div className={classes.sidebar}>
        <Avatar />
        <div className={classes.username}>User Testov</div>
        <div>
            <h3>About me:</h3>
            <p>I'm 32 years old. My profession is management.
            I am a fan of frontend development with a little experience.
            This page was created to demonstrate my skills with React JS.
            I have no experience working as a developer on a commercial project.
            When the project is completed, I will attach a link to the repository.
            If you are looking for a Junior web developer and came to this page,
            please contact me. <br/>
        I apologize for my English:)</p>
        </div>
        <SocialButtons />
    </div>
}

export default Sidebar