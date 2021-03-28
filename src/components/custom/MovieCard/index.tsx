import React from 'react'


type IProps = {
    name?: string,
    url?: string,
    genres?: string[],
    premiered?: string,
}
const MovieCard: React.FC<IProps> = ({ name, url }) => {
    return <div className="card">
        <img className="card__img" alt={`card__${name}`} src={url} />
        <div className='card__content d-flex'>
            <h3 className="card__text">{name}</h3>
        </div>
    </div>
}

export default MovieCard;