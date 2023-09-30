import React,{useEffect, useState} from 'react';
import graphic_design from '../../Assets/graphic-design.jpg';
import graphic_design1 from '../../Assets/graphic-design1.jpg';
import graphic_design2 from '../../Assets/graphic-design2.jpg';
import graphic_design3 from '../../Assets/graphic-design3.jpg';
import graphic_design4 from '../../Assets/graphic-design4.jpg';
import web_design from '../../Assets/web-design.jpg';
import web_design1 from '../../Assets/web-design1.jpg';
import web_design2 from '../../Assets/web-design2.jpg';
import web_design3 from '../../Assets/web-design3.jpg';
import web_design4 from '../../Assets/web-design4.jpg';
import app_design from '../../Assets/app-design.jpg';
import app_design1 from '../../Assets/app_design1.jpg';
import app_design2 from '../../Assets/app_design2.jpg';
import app_design3 from '../../Assets/app_design3.jpg';
import app_design4 from '../../Assets/app_design4.jpg';
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
      <div className='d-flex justify-ontent-center'>
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
                    <figure>
                      <img src={graphic_design1} alt='Graphic Design Project 1' className='img-fluid' />
                      <figcaption>Graphic Design Project 1</figcaption>
                    </figure>
                  </div>
                  <div className='col-md-6'>
                    <figure>
                      <img src={graphic_design2} alt='Graphic Design Project 2' className='img-fluid' />
                      <figcaption>Graphic Design Project 2</figcaption>
                    </figure>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <figure>
                      <img src={graphic_design3} alt='Graphic Design Project 3' className='img-fluid' />
                      <figcaption>Graphic Design Project 3</figcaption>
                    </figure>
                  </div>
                  <div className='col-md-6'>
                    <figure>
                      <img src={graphic_design4} alt='Graphic Design Project 4' className='img-fluid' />
                      <figcaption>Graphic Design Project 4</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <figure>
                  <img className='main' src={graphic_design} alt='Graphic Design Project' />
                  <figcaption>Graphic Design Project</figcaption>
                </figure>
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
          <figure>
            <img className='main' src={app_design} alt='app_design Project' />
            <figcaption>Main App Design</figcaption>
          </figure>
        </div>
        <div className='col-md-6'>
          <div className='row mb-3'>
            <div className='col-md-6'>
              <figure>
                <img src={app_design1} alt='app_design Project 1' className='img-fluid' />
                <figcaption>App Design 1</figcaption>
              </figure>
            </div>
            <div className='col-md-6'>
              <figure>
                <img src={app_design2} alt='app_design Project 2' className='img-fluid' />
                <figcaption>App Design 2</figcaption>
              </figure>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <figure>
                <img src={app_design3} alt='app_design Project 3' className='img-fluid' />
                <figcaption>App Design 3</figcaption>
              </figure>
            </div>
            <div className='col-md-6'>
              <figure>
                <img src={app_design4} alt='app_design Project 4' className='img-fluid' />
                <figcaption>App Design 4</figcaption>
              </figure>
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
              <figure>
                <img src={web_design1} alt='web_design Project 1' className='img-fluid' />
                <figcaption>Web Design 1</figcaption>
              </figure>
            </div>
            <div className='col-md-6'>
              <figure>
                <img src={web_design2} alt='web_design Project 2' className='img-fluid' />
                <figcaption>Web Design 2</figcaption>
              </figure>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <figure>
                <img src={web_design3} alt='web_design Project 3' className='img-fluid' />
                <figcaption>Web Design 3</figcaption>
              </figure>
            </div>
            <div className='col-md-6'>
              <figure>
                <img src={web_design4} alt='web_design Project 4' className='img-fluid' />
                <figcaption>Web Design 4</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <figure>
            <img className='main' src={web_design} alt='web_design Project' />
            <figcaption>Main Web Design</figcaption>
          </figure>
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
