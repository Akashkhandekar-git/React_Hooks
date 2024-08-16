import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [input, setInput] = useState(0);
    const [counter, setCounter] = useState(0);

    const calculate =(num)=>{
        console.log('Calculation is done..!')
        
        return Math.pow(num,3);
    }
    
    const output = useMemo (()=>calculate(input),[input]);

  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
        <div>
            <input type="number" placeholder='enter the number' value={input} onChange={(e)=>setInput(e.target.value)} />
            <h1>Cube of the number is: {output} </h1>

            <button onClick={()=>setCounter(counter+1)} className='btn btn-primary'>Counter ++</button>
            <h1>Counter No. {counter}</h1>
        </div>
    </div>
    </>
  )
}

export default UseMemoHook;