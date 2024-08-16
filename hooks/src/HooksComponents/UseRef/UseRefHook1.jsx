import React, { useRef, useState } from "react";

const UseRefHook1 = () => {
  const [count, setCount] = useState(0);

  const btnColor = useRef();

  const handleChange = () => {
    setCount(count + 1);
    btnColor.current.style.background = "black";
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={handleChange}
          className="btn btn-success px-3"
          ref={btnColor}
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
      </div>
    </>
  );
};

export default UseRefHook1;
