import React,{useEffect, useState} from 'react';
import Project1 from "../../Assets/Project1.png";
import graphic_design1 from '../../Assets/graphic-design1.jpg';
import graphic_design2 from '../../Assets/graphic-design2.jpg';
import graphic_design3 from '../../Assets/graphic-design3.jpg';
import graphic_design4 from '../../Assets/graphic-design4.jpg';
import Project2 from '../../Assets/Project2.png';
import web_design1 from '../../Assets/web-design1.jpg';
import web_design2 from '../../Assets/web-design2.jpg';
import web_design3 from '../../Assets/web-design3.jpg';
import web_design4 from '../../Assets/web-design4.jpg';
import Project3 from '../../Assets/Project3.png';
import app_design1 from '../../Assets/app_design1.jpg';
import app_design2 from '../../Assets/app_design2.jpg';
import app_design3 from '../../Assets/app_design3.jpg';
import app_design4 from '../../Assets/app_design4.jpg';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const[loading , setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <>
    {loading ? (
      <div className='d-flex justify-content-center'>
    <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
) : (
  <>
    <section className='Portfolio_Container'>
        <div className='d-flex'>
          <div className='container Projects'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                      <img src={graphic_design1} alt='Graphic Design Project 1' className='img-fluid' />
                  </div>
                  <div className='col-md-6'>
                      <img src={graphic_design2} alt='Graphic Design Project 2' className='img-fluid' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                      <img src={graphic_design3} alt='Graphic Design Project 3' className='img-fluid' />
                  </div>
                  <div className='col-md-6'>
                      <img src={graphic_design4} alt='Graphic Design Project 4' className='img-fluid' />
                  </div>
                </div>
              </div>
                <div className='col-md-6'>
                <Link to="/CaseStudy1">
                  <img className='main' src={Project1} alt='Graphic Design Project' />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-5'>
  <div className='d-flex'>
    <div className='container Projects'>
      <div className='row'>
      <div className='col-md-6'>
      <Link to="/CaseStudy2"> 
            <img className='main' src={Project2} alt='app_design Project' />
            </Link >
        </div>
  
        <div className='col-md-6'>
          <div className='row mb-3'>
            <div className='col-md-6'>
                <img src={app_design1} alt='app_design Project 1' className='img-fluid' />
            </div>
            <div className='col-md-6'>
                <img src={app_design2} alt='app_design Project 2' className='img-fluid' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
                <img src={app_design3} alt='app_design Project 3' className='img-fluid' />
            </div>
            <div className='col-md-6'>
                <img src={app_design4} alt='app_design Project 4' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className='mt-5'>
  <div className='d-flex'>
    <div className='container Projects'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='row mb-3'>
            <div className='col-md-6'>
                <img src={web_design1} alt='web_design Project 1' className='img-fluid' />
            </div>
            <div className='col-md-6'>
                <img src={web_design2} alt='web_design Project 2' className='img-fluid' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
                <img src={web_design3} alt='web_design Project 3' className='img-fluid' />
            </div>
            <div className='col-md-6'>
                <img src={web_design4} alt='web_design Project 4' className='img-fluid' />
            </div>
          </div>
        </div>
     <div className='col-md-6'>
     <Link to="/CaseStudy3">
            <img className='main' src={Project3} alt='web_design Project' />
            </Link> 
        </div>
     
      </div>
    </div>
  </div>
</section>
</>
   )}
    </>
 
  );
};

export default Portfolio;
