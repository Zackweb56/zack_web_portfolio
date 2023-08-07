import React from 'react'
import './Button.css'
// route link
// import {Link} from 'react-router-dom'

function Button(props) {
  return (
    <div id='button'>
    <a href={props.link} download={props.download} className="link">
      <div className="button">
        {props.title} &nbsp;
        <span className="shift">{props.icon}</span>
        <div className="mask"></div>
      </div>
    </a>
    </div>
  )
}

export default Button