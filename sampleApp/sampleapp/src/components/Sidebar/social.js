import React from 'react'
import call from './call.png'
import tele from './tele.png'
import faceb from './faceb.png'
import inst from './inst.png'
import github from './github.png'
import classes from './social.module.css'


const SocialButtons = () => {
    return <div>
        <img src={call} alt='phone'  className={classes.buttons} />
        <img src={tele} alt='telegram'  className={classes.buttons} />
        <img src={faceb} alt='facebook'  className={classes.buttons}/>
        <img src={inst} alt='instagram'  className={classes.buttons} />
        <img src={github} alt='github'  className={classes.buttons} />
    </div>
}

export default SocialButtons