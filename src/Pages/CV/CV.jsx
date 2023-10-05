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
            <div className="Flex_Item2"><span>Lorem ipsum dolor sit amet consectetur. Eu turpis ut pretium egestas odio velit. Malesuada non sed bibendum tortor platea risus. Egestas accumsan porta mauris cursus. Urna sed et dictum turpis proin blandit. Sed sociis aliquet aenean felis sit.</span></div>
            <div className="Flex_Item3 text-end">
              <h5 >Lorem ipsum dolor sit</h5>
              <span className='font'>Lorem ipsum dolor sit amet consectetur Sit malesuada enim massa auctor pharetra purus orci</span>
            </div>
          </div>
          <div className='Flex'>
            <div className="flex_item2 ">
              <div className='mb-5' >
                <h3 >Education</h3>
                <h5 className='mt-5'>Lorem ipsum dolor</h5>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </div>
              <div className='mb-5'>
                <h3>Achievments</h3>
                <h5>Lorem ipsum dolor</h5>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <h5>Lorem ipsum dolor</h5>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <h5>Lorem ipsum dolor</h5>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
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
                <span>Ancient History, War, Philosophy, and Theology</span>
                <h5>Literature</h5>
                <span>Historical Non-Fiction and Classical Fiction</span>
                <h5>Music</h5>
                <span>Crooner, Classical, Country, Pop Rock, and Classic Rock</span>
                <h5>Exercise</h5>
                <span >Working out and enjoying the outdoors</span>
              </div>
            </div>

            <div className="flex_item2 ">
              <h3>Experience</h3>
              <div className='mt-3 mt-xs-2'>
                <h5 >Freelance Graphic Designer</h5>
                <span>Lorem ipsum dolor sit</span>
                <ul class="bullet-list">
                  <li>Lorem ipsum dolor sit amet consectetur. Fusce quam feugiat vehicula proin. Mauris id fermentum sed scelerisque in a. Elementum tellus gravida volutpat ultricies mattis. Turpis urna morbi id posuere vulputate blandit aliquam iaculis.</li>
                  <li>Rhoncus tellus ultricies posuere euismod non sapien. Nibh vivamus faucibus nulla fermentum ac vitae cursus. Lobortis egestas morbi quisque quis tempor at id. In morbi faucibus scelerisque faucibus vestibulum. Scelerisque duis cras convallis morbi.</li>
                  <li>Neque ultricies ultricies et nisi congue sit sed. Rhoncus ultrices facilisis et mauris vel. Morbi elit auctor neque congue id convallis.</li>
                </ul>
              </div>
              <div className='mb-5 mb-xs-1 mt-xs-1 mt-5'>
                <h5>Visual Designer</h5>
                <span>Lorem ipsum dolor sit</span>
                <ul class="bullet-list">
                  <li>Lorem ipsum dolor sit amet consectetur. Nunc porttitor iaculis eget eget lacus varius. Aliquet mattis arcu placerat dui sagittis. Augue enim odio vestibulum non pellentesque ac ut mauris ut. Morbi facilisi lectus tristique at tortor. Amet facilisi eu gravida tincidunt lacinia posuere. Sed id auctor molestie pulvinar risus sed neque.</li>
                </ul>
              </div>
              <div className='mb-5 mb-xs-1 '>
                <h5>Graphic Designer</h5>
                <span>Lorem ipsum dolor sit</span>
                <ul class="bullet-list">
                  <li>Lorem ipsum dolor sit amet consectetur. Fusce quam feugiat vehicula proin. Mauris id fermentum sed scelerisque in a. Elementum tellus gravida volutpat ultricies mattis. Turpis urna morbi id posuere vulputate blandit aliquam iaculis.</li>
                </ul>
              </div>
            </div>

            <div className="flex_item ms-3 ">
              <div className='mb-5'>
                <h3>Contact</h3>
                <h5 className='mt-3'>Email</h5>
                <span>Lorem ipsum dolor sit</span>
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