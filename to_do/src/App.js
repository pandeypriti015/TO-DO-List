import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component{
constructor(props) {
  super(props);
  this.state=
  {
  }
}

render() {
  return (
    <div className='body'>
      <div className='body-header'>
        <textarea rows="10" cols="50"/>
        <button className="button">
        <div className="text"> Add </button>
        <
    </div>
      </div>
  )
  
}
}

class App extends Component {
 
  render(){
    return (
      <div className='body'>
      <div className='body-header'>
      <div className="text">
      </div>
        <List />
      </div>
      </div>
    );     
    }
  }
  
export default App;
