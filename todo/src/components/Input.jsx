import React from "react";
import "../styles/Input.css";

const Input = ({ type, placeholder, classStyle }) => {
  return <input type={type} className={classStyle} placeholder={placeholder} />;
};

export default Input;
