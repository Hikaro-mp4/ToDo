import React from "react";
import Button from "../components/Button"
import Input from "./Input";
import '../styles/PostItem.css'

const PostItem = ({task,date}) => {

    return(
        <li className="task">
            <Input type={'checkbox'}/>
            <span className="todo">{task}</span>
            <span className="date">{date}</span>
            <Button body={"Delete"}/>
        </li>
    )
}

export default PostItem;