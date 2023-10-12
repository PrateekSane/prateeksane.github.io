import React from 'react'
import About from './About'
import ProfessionalExperience from './ProfessionalExperiences'
import './Main.css'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='content'>
                <section className='name-section'>
                    <h1>Hi There! I am <span className='name'><br/>Prateek Sane</span></h1>
                </section> 
                <section><About /></section>
                <section><ProfessionalExperience /></section>
                <section>
                    <h2>What I'm Best at</h2>
                    <p>Python, C++, Javascript</p>
                </section>
                <section>
                    <h2>What I'm Looking to Level Up</h2>
                    <p>Rust</p>
                    <p>how to code</p>
                    <p>Documenting and finishing stuff, hence this website...</p>
                </section>
                <section>
                    <h2>What I'm Worst at</h2>
                    <p>Nothing. I am flawless.</p>
                </section>
            </div>
            <div className='sidebar'>
                <div className='img-container'><img src="face.jpeg" alt='Face'/></div>
            </div>
        </div>
    )
}

export default LandingPage