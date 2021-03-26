import React from 'react'
import { IMovie } from '../../../types/index'


interface IProps {
    movie: IMovie
}

const MoviePageView: React.FC<IProps> = ({ movie }) => {
    return <div className="movie">
        {console.log(movie)}
        <div className="movie__banner">
            <img className="movie__bannerImg" src={movie.image?.original} alt="large_banner" />
            {/* <div>Back</div> */}
        </div>
        <div className="movie__container">
            <div>
                <img className="movie__mediumImg" src={movie.image?.medium} alt="" />
            </div>
            <div className="movie__info">
                <h2>{movie.name}</h2>
                <ul>
                    {movie.genres && movie.genres.map((genre) => {
                        return <li>{genre}</li>
                    })}
                </ul>
                <p className="movie__summary">
                    {movie.summary?.replace(/(<([^>]+)>)/gi, "")}
                </p>
            </div>
        </div>
    </div>
}


export default MoviePageView;