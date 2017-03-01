import React from 'react'
import MyFuncComponent from './components/my-func-component'
import MyComponent from './components/my-component'
import MyClassComponent from './components/my-class-component'

class App extends React.Component {
  render () {
    return (
      <div>
        <MyComponent title="My Component" color="red"/>
        <MyFuncComponent title="My Func Component" color="blue"/>
        <MyClassComponent title="My Class Component" color="green" />
      </div>
    )
  }
}

export default App
