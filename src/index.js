import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

//stateless functional components
// const MyFuncComponent = props => {
//   return (
//     <h1 className={props.color}>
//       <span>{props.title}</span>
//     </h1>
//   )
// }

//ES6 Class Component
// class MyClassComponent extends React.Component {
//   render () {
//     return (
//       <h1 className={this.props.color}>
//         <span>{this.props.title}</span>
//       </h1>
//     )
//   }
// }

// the old way - Create Class
// var MyComponent = React.createClass({
//   render: function(){
//     return (
//       <h1 className={this.props.color}>{this.props.title}</h1>
//     )
//   }
// })

// ReactDOM.render(
//   <div>
//     <h1 className="red">Hello There</h1>
//     <MyComponent color="red" title="I'm Red"/>
//     <MyClassComponent color="blue" title="I'm Blue"/>
//     <MyFuncComponent color="green" title="I'm Green"/>
//     <h2>Goodbye</h2>
//     <footer>All rights...</footer>
//   </div>,
//   document.getElementById('root')
// )
