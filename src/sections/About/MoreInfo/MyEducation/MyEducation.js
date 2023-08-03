import React from 'react'
import './MyEducation.css'

const MyEducation = () => {
  return (
    <div>
        <section className="container-md education" id="education">
        <h1 className="heading"> <span> my </span> education : </h1>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'> 2020 - 2021 </span>
                    <h3>LYCEE IBN TOFAIL</h3>
                    <p>bachelor's degree in physical and chemical sciences</p>
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <span className='span'> 2021 - 2023 </span>
                    <h3>ISTA NTIC BENI MELLAL</h3>
                    <p>Diploma in Digital Development (full stack option)</p>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default MyEducation