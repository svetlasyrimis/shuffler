import React from 'react'

export default function Pairs(props) {
  console.log(props)
  return (

    <div className="list">
      {props.pairs && props.pairs.map((pairArray,i) =>  
        <div className="card" key={i} >
          <div className="pair">{pairArray.map(pair => <p className="name" key={pair.id}>{pair.name}</p>)}</div>
         
        </div>
      )}
    </div>
  )
}
