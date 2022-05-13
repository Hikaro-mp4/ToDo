import React from "react";
import '../styles/FilterTasks.css'
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";

const FilterTasks = () => {

    return(
        <div className="filter__tasks">
            <MyButton body={"All"}/>
            <MyButton body={"Done"}/>
            <MyButton body={"Undone"}/>
            <MySelect defVal={"Sort by date"}/>
        </div>
    )
}

export default FilterTasks;