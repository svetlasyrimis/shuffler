import React from 'react';
import './App.css';
import List from './components/List'
import Pairs from './components/Pairs'
// const students = require('./students')
import { students } from './students'
import dino from './assets/dino.jpg'
import mando from './assets/mand.png'
import PairsTwo from './components/PairsTwo'


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
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      students: array
    })
    console.log(this.state.students)
    let pairs = this.pair(this.state.students);
    this.setState({
      pairs: pairs
    })
   
  }
  // pair = (array) => {
    
  //   let modifiedArray = [];
  //   for (let i = 0; i < array.length; i += 2) {
  //       let pair = [array[i], array[i + 1]]
  //       modifiedArray.push(pair) 
  //   }  
  //   console.log(modifiedArray)
  //   return modifiedArray
  // }

  // pair = (arr, size = 2) => {
  //   console.log(arr)
  //   return arr.map((x, i) => i % size === 0 && arr.slice(i, i + size)).filter(x => x)
  // }
  pair = (array) => {
    let newArray = [];
    let modifiedArray = [];
    let indexToSplit = Math.floor((array.length / 2))
    let first = array.slice(0, indexToSplit)
    let second = array.slice(indexToSplit)
    second.reverse();
    newArray.push(first, second)
    
    for (let i = 0; i <= newArray.length-1; i += 1) {
      let part = newArray[i]
      
      for (let j = 0; j <= part.length-1; j += 1) {
        let pair = [newArray[i][j], newArray[i + 1][j]]
        modifiedArray.push(pair)
        
      } 
      return modifiedArray
    }  
    console.log(modifiedArray)
    return modifiedArray
  }
  
  render() {
    return (
      <div className="App">
        <div className="dino-div">
        <button onClick={() =>
          this.shuffle(this.state.students)
          
        }><img src={mando} alt={mando} className="dino"/></button></div>
        {/* <List students={this.state.students} /> */}
        <PairsTwo pairs={this.state.pairs} />
        {/* <Pairs pairs={this.state.pairs} /> */}
      </div>
    );
  }
  
}

export default App;
