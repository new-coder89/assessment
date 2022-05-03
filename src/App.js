import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
//must keep app.css after bootstrap.css
import './App.css';

import List from './components/List';

import ListHeading from './components/ListHeading';

import Search from './components/Search';



const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchMov, setSearchMov] = useState('');

  const getMovieRequest = async (searchMov) => {
      const url=`http://www.omdbapi.com/?s=blue&apikey=f37caf23`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if(responseJson.Search){

      setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
      getMovieRequest(searchMov);
    }, [searchMov]);


  return (
    <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4' >
            <ListHeading heading='Movies'/>
            <Search searchMov={searchMov} setSearchMov={setSearchMov}/>
        </div>
        
        <div className='row'>
            <List movies = {movies} />
        </div>
    </div>
  )
}

export default App;
