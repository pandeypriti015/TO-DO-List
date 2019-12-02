import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pageCount:240
    }
    this.wordCount = this.wordCount.bind(this);
    this.addText = this.addText.bind(this);
  }
  addText() {
    let text = this.state.text;
    this.props.setItems(text);
    this.setState({
      text:'',
      pageCount:240
    })
  }

  wordCount(event){
    let characterCount =240- event.target.value.length;
    this.setState({
      pageCount: characterCount,
      text: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <div className='header-content'>
            <div className='textarea-container'>
              <textarea className='textarea' maxLength='240' onChange={this.wordCount} 
              value={this.state.text} placeholder='WElCOME'></textarea>
            </div>
            <div >
              <button className='button' onClick={this.addText}>Add</button>
            </div>
          </div>
          <span className="md-color-grey-300">Current word {this.state.pageCount}</span>
        </div>
      </div>
    );
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'',
      items:[]

    };
    this.setItems = this.setItems.bind(this);
  }
  setItems(text) {
    this.setState({
      text: text,
      items:[...this.state.items,text]
    });
  }
  render(){
    return(
      <div>
         <Todo setItems={this.setItems} />
         {this.state.items.map((item, index) => (
           <div key='index'>
             <input type="checkbox"  className="check"/>
              <h1>{item}</h1>
            </div>
         ))
  }
  </div>
    )
  }
}
export default App;