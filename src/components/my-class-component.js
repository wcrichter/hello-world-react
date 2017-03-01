import React from 'react'

//ES6 Class Component
class MyClassComponent extends React.Component {
  render () {
    return (
      <h1 className={this.props.color}>
        <span>{this.props.title}</span>
      </h1>
    )
  }
}

export default MyClassComponent
