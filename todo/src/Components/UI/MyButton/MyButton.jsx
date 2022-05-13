import React from "react";
import '../MyButton/MyButton.css'

const MyButton = ({body}) =>{

    return(
        <button className="btn">{body}</button>
    )
}

export default MyButton;