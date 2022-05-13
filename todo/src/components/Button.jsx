import React from "react";
import '../styles/Button.css'

const Button = ({body}) =>{

    return(
        <button className="btn">{body}</button>
    )
}

export default Button;