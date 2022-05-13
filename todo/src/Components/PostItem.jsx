import React from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import '../styles/PostItem.css'

const PostItem = ({task,date}) => {

    return(
        <li className="task">
            <MyInput type={'checkbox'}/>
            <span className="todo">{task}</span>
            <span className="date">{date}</span>
            <MyButton body={"Delete"}/>
        </li>
    )
}

export default PostItem;