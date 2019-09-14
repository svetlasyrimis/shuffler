import React from 'react';
import './App.css';
import List from './components/List'
import Pairs from './components/Pairs'
// const students = require('./students')
import { students } from './students'
import dino from './assets/dino.jpg'


class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      isShuffled: false,
      students: students,
      pairs: [],
     
    }
  
  }

  
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1))
      let temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
    this.setState({
      students: array
    })
    console.log(this.state.students)
    let pairs = this.pair(this.state.students) 
    console.log(pairs)
    this.setState({
      pairs: pairs
    })
  }

  pair = (array) => {
    let newArray = [];
    let modifiedArray = [];
    let indexToSplit = Math.floor((array.length / 2))
    let first = array.slice(0, indexToSplit)
    let second = array.slice(indexToSplit + 1)  
    newArray.push(first, second)
    for (let i = 0; i <= newArray.length; i += 1) {
      for (let j = 0; j < newArray[i].length; j += 1) {
        let pair = [newArray[i][j], newArray[i + 1][j]]
        modifiedArray.push(pair)
        // console.log(pair)
        
      } 
      return modifiedArray
    }  
    return modifiedArray
  }
  
  render() {
    return (
      <div className="App">
        
        <button onClick={() =>
          this.shuffle(this.state.students)
          
        }><img src={dino} className="dino"/></button>
        {/* <List students={this.state.students} /> */}
      
        <Pairs pairs={this.state.pairs} />
      </div>
    );
  }
  
}

export default App;
