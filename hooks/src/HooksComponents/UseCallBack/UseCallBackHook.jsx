import React, { useState } from 'react';
import UseCallHeader from './UseCallHeader'; 

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);
  return (
    <> 
      <div className='text-center'>
        < UseCallHeader />
        <div>
               <h1>{count}</h1>
        </div>
        <button onClick={()=> setCount(count+1)} className='btn btn-success'>+</button>
      </div>
    </>
  )
}

export default UseCallBackHook