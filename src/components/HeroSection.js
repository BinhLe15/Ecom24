import React from 'react'
import { TButton } from './TButton'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/Euro2024.mp4" autoPlay loop muted />
        <h1>UEFA EURO 2024 IS COMING</h1>
        <p>Are you ready?</p>
        <div className='hero-btns'>
            <TButton
                className='btns'
                buttonSize='btn--large'
                buttonStyle='btn--outline'
                link='https://www.uefa.com/euro2024/'
                target='_blank'
            >
                GET STARTED
            </TButton>

            <TButton
                className='btns'
                buttonSize='btn--large'
                buttonStyle='btn--primary'
                link='https://www.youtube.com/watch?v=9MI5ffWouRMhttps://www.youtube.com/watch?v=9MI5ffWouRM'
                target='_blank'
            >
                WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} />
            </TButton>
        </div>
    </div>
  )
}

export default HeroSection
