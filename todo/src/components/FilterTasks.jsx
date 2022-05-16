import React,{useMemo, useState} from "react";
import '../styles/FilterTasks.css'
import Button from "./Button";
import Select from "./Select";

const FilterTasks = ({setFilter}) => {

    return(
        <div className="filter__tasks">
            <Button body={"All"} callback={()=>setFilter('All')}/>
            <Button body={"Done"} callback={()=>setFilter('checked')}/>
            <Button body={"Undone"} callback={()=>setFilter('unchecked')}/>
            <Select defVal={'Sort by date'}/>
        </div>
    )
}

export default FilterTasks;
