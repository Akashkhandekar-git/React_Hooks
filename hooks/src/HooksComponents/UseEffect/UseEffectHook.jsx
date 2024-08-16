import React, { useEffect, useState } from 'react'
import "./UseEffectHook.css";

const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
       { 
        <><div>Hello {count}</div></>
       }

    },[count])
    return (
        <>
          <div className="container-fluid main">
            <div className="row justify-content-center m-5">
              <div className="col-4 border shadow rounded p-4 ">

                <h1>{count}</h1>
                <button onClick={()=>{setCount(count+1)}} className='btn btn-primary'>Start</button>
               
              </div>
            </div>
          </div>
        </>
      );
}

export default UseEffectHook