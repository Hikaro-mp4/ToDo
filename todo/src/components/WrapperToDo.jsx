import React from "react";
import AddTask from "../components/AddTask";
import FilterTasks from "../components/FilterTasks";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const WrapperToDo = () => {

    return(
        <div>
            <Header/>
            <AddTask/>
            <FilterTasks/>
            <Tasks/>
        </div>
    )
}

export default WrapperToDo;