import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const SearchFilter = () => {
  const [query, setQuery] = useState();
  const [result, setResult] = useState([]);

  useEffect(() => {

    if(query === '')  {
      setResult([]);
      return;
    }

    const handleSearchMovie = async () => {
      console.log('searching', query)

      const API_KEY  = 'e1a96f59f64f6f3a6ad1fee3251d7d8d'; 
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.results);
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }

    handleSearchMovie();
  },[query])


  return (
    <>
      <form className="form">
        <div className="search-container">
          <label htmlFor="query">MOVIE NAME</label>
          <input type="text" placeholder="title" name="query" onChange={(e) => {
            setQuery(e.target.value)
          }}/>
          <button type="submit">Search!</button>
        </div>
      </form>
      {result.length > 0 && <MovieCard searchResult={result} />}
    </>
  )
}

export default SearchFilter;
