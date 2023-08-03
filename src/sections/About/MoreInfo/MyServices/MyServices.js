import React from 'react'
import './MyServices.css'
import {FaCode,FaMobileScreenButton} from 'react-icons/fa6'
import {MdWeb} from 'react-icons/md'

const MyServices = () => {
  return (
    <div className='container-md'>
        <section class="service" id="service">

            <h1 class="heading"> <span> my </span> services: </h1>

            <div class="box_se-container">

                <div class="box_se">
                    <div className="icon"><MdWeb /></div>
                    <h3>web design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,</p>
                    {/* <button type="button" id="btn-services">view more</button> */}
                </div>

                <div class="box_se">
                    <div className="icon"><FaCode /></div>
                    <h3>clean code</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,</p>
                    {/* <button type="button" id="btn-services">view more</button> */}
                </div>

                <div class="box_se">
                    <div className="icon"><FaMobileScreenButton /></div>
                    <h3>responsive design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,</p>
                    {/* <button type="button" id="btn-services">view more</button> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default MyServices