import React from 'react'

// the old way - Create Class
var MyComponent = React.createClass({
  render: function(){
    return (
      <h1 className={this.props.color}>{this.props.title}</h1>
    )
  }
})

export default MyComponent
