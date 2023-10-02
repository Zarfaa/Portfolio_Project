import React from 'react'
import "./CaseStudy.css"
import Image1 from "../../Assets/Project2.1.png"
import Image2 from "../../Assets/Project2.2.png"
import Image3 from "../../Assets/Project2.3.png"
import Image4 from "../../Assets/Project2.4.png"
import Image5 from "../../Assets/Project2.png"
import Image6 from "../../Assets/Project2.5.png"
import Image7 from "../../Assets/Project1.7.png"
import Image8 from "../../Assets/Project1.8.png"
import Image9 from "../../Assets/Project1.9.png"

const CaseStudy2 = () => {
    return (
        <>
            <div className='d-flex gap-5 CaseStudy_Container'>
                <div className='col-md-5 col-lg-5 col-xxl-5 me-5'>
                    <h1>Optic Software</h1>
                    <span>Figma</span>
                </div>
                <div className='col-md-5 col-lg-5 col-xxl-5  ms-5'>
                    <p>Ui Design for automation tool</p>
                </div>
            </div>
            <div className='container'>
            <div className='d-flex flex-wrap Images'>
                <div className='row'>
                    <div className='col-md-6  col-lg-6 col-xxl-6 mb-4'>
                        <img src={Image1} alt='Project 1' />
                    </div>
                    <div className='col-md-6 col-lg-6 col-xxl-6 mb-4'>
                        <img src={Image2} alt='Project 2'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xxl-6 mb-4'>
                        <img src={Image3} alt='Project 3'  />
                    </div>
                    <div className='col-md-6 col-lg-6 col-xxl-6 mb-4 '>
                        <img src={Image4} alt='Project 4' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 col-xxl-12 mb-4' >
                        <img src={Image5} alt='Project 3'style={{"padding-right" : "2.5%" }}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 col-xxl-12 mb-4 '>
                        <img src={Image6} alt='Project 3' style={{"padding-right" : "2.6%" }} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-xxl-6 mb-4'>
                        <img src={Image7} alt='Project 3'  />
                    </div>
                    <div className='col-md-6 col-lg-6 col-xxl-6 mb-4 '>
                        <img src={Image8} alt='Project 4' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 col-xxl-12 mb-4'>
                        <img src={Image9} alt='Project 3' style={{"padding-right" : "2.6%" }} />
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default CaseStudy2