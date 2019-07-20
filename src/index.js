import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../src/components/atoms/buttons/index'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <Button className="btn" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("content"))