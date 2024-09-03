import React, { useState, useEffect } from "react";
import "./Movie.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

let Movie = ({ photo, name, desc, handleClose, isLiked, handleLike }) => {
    let shortenText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    useEffect(() => {
        fetch('https://acb-api.algoritmika.org/api/transaction')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);
    let handleButtonClick = (event, callback) => {
        event.preventDefault();
        event.stopPropagation();
        callback();
    };

    return (
        <div className="movie1">
            <div className="cardMovie">
                <img src={photo} alt={name} />
                <div className="bottomPart">
                    <p className="movie1-name">{name}</p>
                    <p className="movie1-desc">{shortenText(desc, 100)}</p>
                    <div className="likeButton">
                        <button
                            className="handleBtn"
                            onClick={(e) => handleButtonClick(e, handleClose)}
                        >
                            X
                        </button>
                        <button
                            onClick={(e) => handleButtonClick(e, handleLike)}
                            style={{ color: isLiked ? "red" : "black" }}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;