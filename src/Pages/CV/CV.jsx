import React from 'react'
import Photo from "../../Assets/placeholder.png"
import "./CV.css"

const CV = () => {
  return (
    <>
      <div className='Cv_Container '>

          <div className='Flex1'>
            <div className="Flex_Item1 ">
              <img className='cv_img' src={Photo} alt="profile" />
            </div>
            <div className="Flex_Item2"><p>Lorem ipsum dolor sit amet consectetur. Eu turpis ut pretium egestas odio velit. Malesuada non sed bibendum tortor platea risus. Egestas accumsan porta mauris cursus. Urna sed et dictum turpis proin blandit. Sed sociis aliquet aenean felis sit.</p></div>
            <div className="Flex_Item3 text-end">
              <h5 >Lorem ipsum dolor sit</h5>
              <p className='font'>Lorem ipsum dolor sit amet consectetur Sit malesuada enim massa auctor pharetra purus orci</p>
            </div>
          </div>
          <div className='Flex'>
            <div className="flex_item ">
              <div className='mb-5' >
                <h3 >Education</h3>
                <h5 className='mt-3'>Lorem ipsum dolor</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className='mb-5'>
                <h3>Achievments</h3>
                <h5>Lorem ipsum dolor</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <h5>Lorem ipsum dolor</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <h5>Lorem ipsum dolor</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>
                <h3>Software</h3>
                <ul class="bullet-list">
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Premiere Pro</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div>
                <h3 className='mt-5'>Interests</h3>
                <h5>Humanities</h5>
                <p>Ancient History, War, Philosophy, and Theology</p>
                <h5>Literature</h5>
                <p>Historical Non-Fiction and Classical Fiction</p>
                <h5>Music</h5>
                <p>Crooner, Classical, Country, Pop Rock, and Classic Rock</p>
                <h5>Exercise</h5>
                <p>Working out and enjoying the outdoors</p>
              </div>
            </div>

            <div className="flex_item ">
              <h3>Experience</h3>
              <div className='mt-3'>
                <h5 >Freelance Graphic Designer</h5>
                <p>Lorem ipsum dolor sit</p>
                <ul class="bullet-list">
                  <li>Lorem ipsum dolor sit amet consectetur. Fusce quam feugiat vehicula proin. Mauris id fermentum sed scelerisque in a. Elementum tellus gravida volutpat ultricies mattis. Turpis urna morbi id posuere vulputate blandit aliquam iaculis.</li>
                  <li>Rhoncus tellus ultricies posuere euismod non sapien. Nibh vivamus faucibus nulla fermentum ac vitae cursus. Lobortis egestas morbi quisque quis tempor at id. In morbi faucibus scelerisque faucibus vestibulum. Scelerisque duis cras convallis morbi.</li>
                  <li>Neque ultricies ultricies et nisi congue sit sed. Rhoncus ultrices facilisis et mauris vel. Morbi elit auctor neque congue id convallis.</li>
                </ul>
              </div>
              <div className='mb-5 mt-5'>
                <h5>Visual Designer</h5>
                <p>Lorem ipsum dolor sit</p>
                <ul class="bullet-list">
                  <li>Lorem ipsum dolor sit amet consectetur. Nunc porttitor iaculis eget eget lacus varius. Aliquet mattis arcu placerat dui sagittis. Augue enim odio vestibulum non pellentesque ac ut mauris ut. Morbi facilisi lectus tristique at tortor. Amet facilisi eu gravida tincidunt lacinia posuere. Sed id auctor molestie pulvinar risus sed neque.</li>
                </ul>
              </div>
              <div className='mb-5'>
                <h5>Graphic Designer</h5>
                <p>Lorem ipsum dolor sit</p>
                <ul class="bullet-list">
                  <li>Lorem ipsum dolor sit amet consectetur. Fusce quam feugiat vehicula proin. Mauris id fermentum sed scelerisque in a. Elementum tellus gravida volutpat ultricies mattis. Turpis urna morbi id posuere vulputate blandit aliquam iaculis.</li>
                </ul>
              </div>
            </div>

            <div className="flex_item ms-3 ">
              <div className='mb-5'>
                <h3>Contact</h3>
                <h5 className='mt-3'>Email</h5>
                <p>Lorem ipsum dolor sit</p>
              </div>
              <div className='mb-5'>
                <h3>Languages</h3>
                <h5 className='mt-3'>English</h5>
                <span>Fluent</span>
                <h5 className='mt-3'>Spanish</h5>
                <span>Beginner</span>
                <h5 className='mt-3'>Latin</h5>
                <span>Beginner</span>
              </div>
              <div className='mb-5'>
                <h3>Abilities</h3>
                <ul class="bullet-list">
                  <li>Creativity</li>
                  <li>Responsibility</li>
                  <li>Team leadership</li>
                  <li>Effective listening & orating</li>
                  <li>Public speaking</li>
                  <li>Written communications</li>
                </ul>
              </div>
             
            </div>

          </div>
          </div>
    </>
  )
}

export default CV