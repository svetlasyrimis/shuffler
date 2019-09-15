import React, { Component } from 'react'


export default function PairsTwo (props){
  
  
    return (
      <div className="list">
      {props.pairs && props.pairs.map((pairArray,i) =>  
        <div className="card" key={i} >
          <div className="pair">{pairArray.map(pair => <p className="name" key={ pair.id !== undefined ? pair.id : 30 }>{pair.name !== undefined ? pair.name : ""}</p>)}</div>
         
        </div>
      )}
    </div>
    )
  
}
