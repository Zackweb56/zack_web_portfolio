import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <>
    <div className="button">
      <a href={props.link}>
      {props.title} &nbsp;
      <span className="shift">{props.icon}</span>
      </a>
      <div className="mask"></div>
    </div>
    </>
  )
}

export default Button