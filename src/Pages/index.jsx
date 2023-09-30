import React from 'react'
import CV from "./CV/CV"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"
import "./index.css"

const index = () => {
    return (
        <>
        <section>
            <div className='d-flex flex-column align-items-center Container'>
                <div>
                    <h1>TITLE HERE</h1>
                </div>
                <div>
                    <h3>Firstname Lastname</h3>
                </div>
            </div>
            </section>
            <section id="about">
              <CV/>
            </section>
            <section id="portfolio">
              <Portfolio/>
            </section>
            <section id="contact">
              <Contact/>
            </section>
        </>
    )
}

export default index