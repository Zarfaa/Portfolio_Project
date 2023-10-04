import React from 'react'
import "./CaseStudy.css"
import Image1 from "../../Assets/Project3.1.png"
import Image2 from "../../Assets/Project3.2.png"
import Image3 from "../../Assets/Project3.png"
const CaseStudy3 = () => {
    return (
        <div className='AllMargin'>
        <div className='container-fluid'>
            <div className='d-flex mt-5 mb-3'>
                <div className='col-md-5  '>
                    <h1 >Optic Software</h1>
                    <span className="Text-bold ">Figma</span>
                </div>
                <div className='col-md-5 Margin'>
                <p >Ui Design for automation tool</p>
                </div>
            </div>
            
            <div className='row g-4'>
                <div className='col-md-6 mb-1'>
                    <img src={Image1} alt='Project 1' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }}/>
                </div>
                <div className='col-md-6 mb-1'>
                    <img src={Image2} alt='Project 2' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }} />
                </div>

                <div className='col-md-12 mb-1'>
                    <img src={Image3} alt='Project 5' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "97.5%" }}/>
                </div>

               
            </div>
            </div>
        </div>
    )
}

export default CaseStudy3