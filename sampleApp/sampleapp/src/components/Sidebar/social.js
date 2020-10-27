import React from 'react'
import call from './call.png'
import tele from './tele.png'
import faceb from './faceb.png'
import inst from './inst.png'
import github from './github.png'
import classes from './social.module.css'


const SocialButtons = () => {
    return <div>
        <a href='tel:+79967244224' target="_blank" rel="noopener noreferrer">
            <img src={call} alt='phone' className={classes.buttons} />
        </a>
        <a href='https://www.t.me/hollenteufel63' target="_blank" rel="noopener noreferrer">
            <img src={tele} alt='telegram' className={classes.buttons} />
        </a>
        <a href='https://www.facebook.com/AlexanderBarykin88' target="_blank" rel="noopener noreferrer">
            <img src={faceb} alt='facebook' className={classes.buttons} />
        </a>
        <a href='https://www.instagram.com/hollenteufel63/' target="_blank" rel="noopener noreferrer">
            <img src={inst} alt='instagram' className={classes.buttons} />
        </a>
        <a href='https://github.com/Megatron8000' target="_blank" rel="noopener noreferrer">
            <img src={github} alt='github' className={classes.buttons} />
        </a>
    </div>
}

export default SocialButtons