import React from 'react'

function Button(props) {
    const {value, result, secure, add, stat} = props

    function increase(){
        add(()=> {return {...parallelVote, [value]: parallelVote[value] + 1}})
    }



  return (
    <div>
        {/* <h1>{props.scure}</h1> */}
        
        {/* {console.log(props.result)
        } */}
      <button onClick={()=>{props.result(true); increase()}}>{props.value}</button>
    <div>{props.stat && props.scure}</div>
    </div>
  )
}

export default Button
