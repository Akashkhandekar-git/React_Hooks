import React, { useEffect, useRef, useState } from "react";

// UseCase (1) => creating mutable variable so that it will not re-render the application.

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const counter = useRef(0);

  useEffect(() => {
    console.log(counter.current);

    counter.current = counter.current + 1;
  });

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-success px-3"
        >
          +
        </button>
        <h1 className="m-5">{count}</h1>
        <button
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
          className="btn btn-danger px-3"
        >
          -
        </button>
        <h1>{counter.current}</h1>
      </div>
    </>
  );
};

export default UseRefHook;
