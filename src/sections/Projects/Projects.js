import React from 'react'
import Titles from '../../components/Titles/Titles'
import Button from '../../components/Button/Button';
import './Projects.css'
// react icon
import { BiSolidRightArrow } from "react-icons/bi";
import { ProData } from './ProData';

const Projects = () => {
  return (
    <div id='projects' className='container-md mb-5 mt-5'>
      <Titles title='projects' />
      <div className="row mt gap">
        {ProData.map((item,index)=>{
          return(
            <div key={index} className="projects_card card p-4 my-2">
              <div className="project_image">
                <img src={item.project_image} className='img-fluid' alt="project_card_image" />
              </div>
              <div className="card-body">
                <div className="project_title">
                  <h1 className='card-title'>{item.project_title}</h1>
                </div>
                <div className="project_desc">
                  <p className="card-text">{item.project_desc}</p>
                </div>
                <div className="btn">
                  <Button title="more info" link="#" icon={<BiSolidRightArrow />} />
                </div>
              </div>
            </div>
          )
        })}
      </div> 
    </div>
  )
}

export default Projects