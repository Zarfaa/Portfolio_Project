import React from 'react'
import "./CaseStudy.css"
import Image1 from "../../Assets/Project2.1.png"
import Image2 from "../../Assets/Project2.2.png"
import Image3 from "../../Assets/Project2.3.png"
import Image4 from "../../Assets/Project2.4.png"
import Image5 from "../../Assets/Project2.png"


const CaseStudy2 = () => {
    return (
        <div className='AllMargin'>
        <div className='container-fluid' >
            <div className='d-flex mt-5 mb-3'>
                <div className='col-md-5 ms-3'>
                    <h1>Personal Portfolio</h1>
                    <span className="Text-bold">Photoshop and Figma</span>
                </div>
                <div className='col-md-5 Margin '>
                    <p >Web Design for my personal portfolio</p>
                </div>
            </div>

            <div className='row g-4'>
                <div className='col-md-6 mb-1'>
                    <img src={Image1} alt='Project 1'  className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }}/>
                </div>
                <div className='col-md-6 mb-1'>
                    <img src={Image2} alt='Project 2'  className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }}/>
                </div>

                <div className='col-md-12 mb-1'>
                    <img src={Image5} alt='Project 5'  className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "97.5%" }} />
                </div>

                <div className='col-md-6 mb-1'>
                    <img src={Image3} alt='Project 3'  className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }} />
                </div>
                <div className='col-md-6 mb-1'>
                    <img src={Image4} alt='Project 4'  className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }} />
                </div>

            </div>
            </div>
        </div>
    )
}

export default CaseStudy2