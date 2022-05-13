import React from "react";
import '../styles/AddTask.css'
import Button from "./Button";
import Input from "./Input";

const AddTask = () => {

    return(
        <div className="add__task">
            <Input type={'text'} placeholder={'I want to...'} classStyle={'inp'}/>
            <Button body={'Add'}/>
            <Button body={'Clear'}/>
        </div>
    )
}

export default AddTask;