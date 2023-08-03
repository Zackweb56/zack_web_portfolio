import React from 'react'
import Button from '../../../../components/Button/Button'
import './MyExperience.css'
// react-icon
import {FaEye} from 'react-icons/fa6'

const MyExperience = () => {
  return (
    <div>
        <section className="container-md experience" id="experience">
        <h1 className="heading"> <span> my </span> experience : </h1>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'> 2020 - 2021 </span>
                    <h3>INTERNSHIP</h3>
                    <p>1 month (April 2023) at SEWS-MOROCCO in Kenitra: <br />
                    <span className='mx-4'>- Develop a QCM Test Web Application</span></p>
                    <div className="btn">
                    <Button title="View Image" link="#" icon={<FaEye />} />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default MyExperience