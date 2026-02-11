import React, { useState } from 'react'
import Button from './Button';

 function MiniPoll() {
    const [options, setOption]=  useState(["React", "Vue", "Svelte"]);
    const [parallelVote, setVote] = useState({React:1, Vue:2, Svelte:5});
    const [showResults, setResult] = useState(false);
    // console.log(showResults);
    
  return (
    <div>
        
        <h3>Which option is your favorit choice?</h3>
      {options.map(optiens => {
        // {console.log(parallelVote)}
        //  [a, setScure] = useState(()=>{
        //     parallelVote[optiens] +=1;
        //  })
       return <Button value={optiens} result={setResult} scure={parallelVote[optiens]} ab={setVote} stat={showResults}></Button>
      })}
      {/* <div>{showResults && parallelVote.React}</div> */}
      {/* <button onClick={()=>{parallelVote.React+=1; setVote({Vue:5})}}></button> */}
      <button onClick={()=>setResult(!showResults)}>Show</button>
    </div>
  )
}
export default MiniPoll