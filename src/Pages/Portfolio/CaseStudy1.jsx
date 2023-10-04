import React from 'react';
import "./CaseStudy.css";
import Image1 from "../../Assets/Project1.1.png";
import Image2 from "../../Assets/Project1.2.png";
import Image3 from "../../Assets/Project1.3.png";
import Image4 from "../../Assets/Project1.4.png";
import Image5 from "../../Assets/Project1.5.png";
import Image6 from "../../Assets/Project1.6.png";
import Image7 from "../../Assets/Project1.7.png";
import Image8 from "../../Assets/Project1.8.png";
import Image9 from "../../Assets/Project1.9.png";

const CaseStudy1 = () => {
    return (
        <div className='AllMargin'>
            <div className='container-fluid '>
                <div className='d-flex'>
                    <div className='col-md-5 mt-3 ms-4'>
                        <h1 className=' mt-3 '>PickShare</h1>
                        <span className="Text-bold">Photoshop, Illustrator, and Figma</span>
                    </div>
                    <div className='col-md-5 Margin'>
                        <p>Brand Identity and Web Design for PickShare, a sports analytics platform</p>
                    </div>
                </div>

                <div className='row g-4'>
                    <div className='col-md-6 mb-1'>
                        <img src={Image1} alt='Project 1' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }} />
                    </div>
                    <div className='col-md-6 mb-1'>
                        <img src={Image2} alt='Project 2' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }} />
                    </div>

                    <div className='col-md-6 mb-1'>{/*copy two col-md-6 divs for two images in a row */}
                        <img src={Image3} alt='Project 3' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }} />
                    </div>
                    <div className='col-md-6 mb-1'>
                        <img src={Image4} alt='Project 4' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "95%" }} />
                    </div>

                    <div className='col-md-12 mb-1'>
                        <img src={Image5} alt='Project 5' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "97%" }} />
                    </div>

                    <div className='col-md-12 mb-1'> {/*copy this div for single image*/}
                        <img src={Image6} alt='Project 6' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "97%" }} />
                    </div>

                    <div className='col-md-6 mb-1'>
                        <img src={Image7} alt='Project 7' className='img-fluid mx-auto d-block' style={{ margin: '0.2em', width: "95%" }} />
                    </div>
                    <div className='col-md-6 mb-1'>
                        <img src={Image8} alt='Project 8' className='img-fluid mx-auto d-block' style={{ margin: '0.2em', width: "95%" }} />
                    </div>

                    <div className='col-md-12 mb-1'>
                        <img src={Image9} alt='Project 9' className='img-fluid mx-auto d-block' style={{ margin: '0.5em', width: "97%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy1;
