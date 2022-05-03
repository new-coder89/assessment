import React from "react";

const Search = (props) =>{
    return(
        <div className="col col-sm-4">
            <input className = 'form-control'
            value={props.value}
            onChange={(event)=>props.setSearchMov(event.target.value)}
            placeholder="Enter search..."></input>
        </div>
    )
}

export default Search;