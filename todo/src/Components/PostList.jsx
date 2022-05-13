import React from "react";
import PostItem from "./PostItem";
import '../styles/PostList.css'

const PostList = () => {

    return(
        <ul className="post__list">
            <PostItem task={"Дело 1"} date={"13/06/22"}/>
            <hr/>
            <PostItem task={"Дело 2"} date={"13/06/22"}/>
            <hr/>
            <PostItem task={"Дело 3"} date={"13/06/22"}/>
            <hr/>
            <PostItem task={"Дело 4"} date={"13/06/22"}/>
            <hr/>
            <PostItem task={"Дело 5"} date={"13/06/22"}/>
            <hr/>
        </ul>
    )
}

export default PostList;