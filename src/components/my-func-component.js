import React from 'react'

//stateless functional components
const MyFuncComponent = props => {
  return (
    <h1 className={props.color}>
      <span>{props.title}</span>
    </h1>
  )
}

export default MyFuncComponent
