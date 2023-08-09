import React from 'react'
// import About from '../About'
import './MoreInfo.css'
import MyEducation from './MyEducation/MyEducation'
import MyExperience from './MyExperience/MyExperience'
import Titles from '../../../components/Titles/Titles'
import MyServices from './MyServices/MyServices'
import { BiSolidLeftArrow } from "react-icons/bi";
import {Link} from 'react-router-dom';


const MoreInfo = () => {
  return (
    <div>
      <Titles title='More Information' />
      <Link to="/" className="back_home"> <BiSolidLeftArrow /> Return</Link>
      <MyEducation />
      <MyExperience />
      <MyServices />
    </div>
  )
}

export default MoreInfo