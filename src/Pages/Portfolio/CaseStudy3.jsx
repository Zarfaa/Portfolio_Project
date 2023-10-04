import React from 'react'
import "./CaseStudy.css"
import Image1 from "../../Assets/Project3.1.png"
import Image2 from "../../Assets/Project3.2.png"
import Image3 from "../../Assets/Project3.png"
const CaseStudy3 = () => {
    return (
        <>
        <div className='container'>
            <div className='d-flex gap-5 mt-5'>
                <div className='col-md-5 col-lg-5 col-xxl-5 me-2 '>
                    <h1 >Optic Software</h1>
                    <span >Figma</span>
                </div>
                <div className='col-md-5 col-lg-5 col-xxl-5  ms-5 mt-3'>
                <p >Ui Design for automation tool</p>
                </div>
            </div>
            
            <div className='row g-4'>
                <div className='col-md-6 mb-1'>
                    <img src={Image1} alt='Project 1' className='img-fluid' />
                </div>
                <div className='col-md-6 mb-1'>
                    <img src={Image2} alt='Project 2' className='img-fluid' />
                </div>

                <div className='col-md-12 mb-1'>
                    <img src={Image3} alt='Project 5' className='img-fluid' />
                </div>

               
            </div>
            </div>
        </>
    )
}

export default CaseStudy3