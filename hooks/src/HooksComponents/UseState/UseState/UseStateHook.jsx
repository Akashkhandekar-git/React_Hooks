import React, { useState } from "react";
import "./UseStateHook.css";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };


  
  const handleSubmit =()=>{
    alert(`Email: ${inputData.email}  passwaord ${inputData.password}` )
  }
  return (
    <>
      <div className="container-fluid main">
        <div className="row justify-content-center m-5">
          <div className="col-4 border shadow rounded p-4 ">
            <form onSubmit={handleSubmit} action="submit">

               <div className="box">
                 
               </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={inputData.email}
                  onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={inputData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseStateHook;
