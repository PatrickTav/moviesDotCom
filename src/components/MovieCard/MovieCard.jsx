import { Link } from "react-router-dom"
import {FaRegThumbsUp} from 'react-icons/fa'
import "./LayoutMovieCard.css"

const urlImg = import.meta.env.VITE_IMG


const MovieCard = ({movie, details = true}) => {
const movieImg = `${urlImg}${movie.poster_path}`
  return (
    <div className="movie-card">
      <img src={movieImg} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaRegThumbsUp/> {movie.vote_average}
      </p>
      {details && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard