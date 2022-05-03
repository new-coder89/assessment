import React from "react";

const List = (props) => {
    return(
        <>
        {props.movies.map((movie, index) => (
            <div className='d-flex justify-content-start m-3'style={{width: 300}}>
                <img src={movie.Poster} alt='movie'></img>
            </div>
            ))}
        </>
    )
}

export default List;