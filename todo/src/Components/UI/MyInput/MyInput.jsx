import React from "react";
import '../MyInput/MyInput.css'

const MyInput= ({type,placeholder,classStyle}) => {

    return(
        <input type={type} className={classStyle} placeholder={placeholder}/>
    )
}

export default MyInput;