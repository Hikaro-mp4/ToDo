import React from "react";
import "../styles/Input.css";

const Input = ({ type, placeholder, classStyle,value,callback, checked,addEnter}) => {
  
  return <input type={type} className={classStyle} placeholder={placeholder} checked={checked} value={value} onChange={callback} onKeyDown={addEnter}/>;
};

export default Input;
