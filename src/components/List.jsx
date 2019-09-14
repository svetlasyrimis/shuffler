import React, { Component } from 'react'


export default class List extends Component {
  
  render() {
    return (
      <div>
        
        {this.props.students && this.props.students.map((student,index) =>
          (<div key={student.id}>
            <p>{student.name},{student.id}</p>
          </div>
        ))}
      </div>
    )
  }
}
