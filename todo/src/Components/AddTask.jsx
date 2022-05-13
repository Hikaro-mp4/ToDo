import React from "react";
import '../styles/AddTask.css'
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const AddTask = () => {

    return(
        <div className="add__task">
            <MyInput type={'text'} placeholder={'I want to...'} classStyle={'inp'}/>
            <MyButton body={'Add'}/>
            <MyButton body={'Clear'}/>
        </div>
    )
}

export default AddTask;