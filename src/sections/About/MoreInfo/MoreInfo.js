import React from 'react'
// import About from '../About'
import './MoreInfo.css'
import MyEducation from './MyEducation/MyEducation'
import MyExperience from './MyExperience/MyExperience'
import Titles from '../../../components/Titles/Titles'
import MyServices from './MyServices/MyServices'
import { BiSolidLeftArrow } from "react-icons/bi";


const MoreInfo = () => {
  return (
    <div>
      <Titles title='More Information' />
      <a href="/" className="back_home"> <BiSolidLeftArrow /> Return</a>
      <MyEducation />
      <MyExperience />
      <MyServices />
    </div>
  )
}

export default MoreInfo