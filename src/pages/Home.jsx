import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setTopMovies(data.results);
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    const topMoviesUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopMovies(topMoviesUrl);
  });

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie ) => (<MovieCard key={movie.id} movie={movie}/>))}
      </div>
    </div>
  );
};

export default Home;
