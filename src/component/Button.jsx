import React from 'react'

function Button(props) {
    const {value, result, secure, add, stat} = props

    function increase(){
        console.log(parallelVote);
        
        add((a)=> {return {...parallelVote, [value]: parallelVote[value] + 1}})
    }



  return (
    <div>
        {/* <h1>{props.scure}</h1> */}
        
        {/* {console.log(props.result)
        } */}
      <button onClick={()=>{props.result(true); increase()}}>{props.value}</button>
    <div>{props.stat && props.scure[value]}</div>
    </div>
  )
}

export default Button
