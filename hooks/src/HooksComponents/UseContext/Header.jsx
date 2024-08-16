import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";


const Header = () => {
    const phone = useContext(AppContext);
  return (
    <div>
      <h2>Header</h2>
      <h5>{phone}</h5>
    </div>
  );
};

export default Header;
