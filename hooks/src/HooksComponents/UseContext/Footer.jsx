import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Footer = () => {

    const phone = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <h4>{phone}</h4>
    </div>
  );
};

export default Footer;
