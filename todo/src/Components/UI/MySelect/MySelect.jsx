import React from "react";
import '../MySelect/MySelect.css'

const MySelect = ({defVal}) => {

    return(
        <select className="sort" defaultValue={defVal}>
            <option disabled>{defVal}</option>
            <option value="new">New</option>
            <option value="old">Old</option>
        </select>
    )
}

export default MySelect;