import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

let MovieDetails = ({ moviesArray }) => {
    let { id } = useParams();
    let movie = moviesArray.find(movie => movie.id === parseInt(id));

    return (
        <div className='detail'>
            <div className="movie-details">
                <img src={movie.photo} className="movie-details-photo" alt={movie.name} />
                <div className='bottomDetail'>
                    <h1 className="movie-details-desc name-detail">{movie.name}</h1>
                    <p className="movie-details-desc name-desc">{movie.desc}</p>
                    <Link to="/" className="back-button">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
