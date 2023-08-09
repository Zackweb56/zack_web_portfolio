import React,{useState} from 'react'
import Titles from '../../components/Titles/Titles'
import Button from '../../components/Button/Button';
import './Projects.css'
// react icon
import { FaBook,FaCode } from "react-icons/fa6";
// import { MdOutlineClose } from "react-icons/md";
import { ProData } from './ProData';

const Projects = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleSelectCard = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div id='projects' className='container-md mb-5 mt-5'>
      <Titles title='projects' />
      <div className="row mt gap">
        {ProData.map((item,index)=>{
          return(
            <div key={index} className="projects_card card p-4 my-2">
              <div className="project_image card-image">
                <img src={item.project_image} className='img-fluid' alt="project_card_image" />
              </div>
              <div className="card-body">
                <div className="project_title">
                  <h1 className='card-title'>{item.project_title}</h1>
                </div>
                <div className="project_desc">
                  <p className="card-text d-flex justify-content-between">
                    <span style={{ fontSize: '15px', margin: '4px 0' }}>Keywords</span>
                    <span>{item.project_desc}</span>
                  </p>
                </div>
                <div className="btn d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                  <div className="project_details" onClick={() => handleSelectCard(index)}>
                  <Button title="details" icon={<FaBook />} />
                  </div>
                  {selectedCardIndex === index && (
                    <div className="popup">
                      <div className="popup-content">
                        <h2>{item.project_title}</h2>
                        <p>{item.project_details}</p>
                        <button className='close_btn' onClick={() => handleSelectCard(null)}> Close</button>
                      </div>
                    </div>
                  )}
                  <Button title="source" link={item.project_link_preview} icon={<FaCode />} />
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