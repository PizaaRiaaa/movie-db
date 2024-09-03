import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const MovieCard = ({searchResult}) => {
  return (
    <div>
      {
        searchResult.map((result) => {
          const {id, poster_path, title, release_date, popularity, overview} = result;
          return (
            <div key={id} className="movie-card-container">
              <div className="movie-poster">
                <Zoom>
                  <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} width={230} height={300} alt={title}/>
                </Zoom>
              </div>
              <div className="movie-meta">
                <h2>{title}</h2>
                <p>RELEASE DATE: {release_date}</p>
                <p>RATING: {popularity}</p>
                <p>{overview}</p>
              </div>
            </div>
          )
        }) 
      }
    </div>
  )

}

export default MovieCard;
