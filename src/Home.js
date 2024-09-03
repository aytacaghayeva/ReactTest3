import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Movie from "./Movie";
import Movie1 from "./movie1.jpeg";
import Movie2 from "./movie2.jpg";
import Movie3 from "./movie3.jpg";
import { Link } from "react-router-dom";

function Home() {
    let [movieName] = useState("");
    let [moviesArray, setMoviesArray] = useState([]);
    let [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        let initialMovies = [
            {
                id: 0,
                photo: Movie1,
                name: "Inside Out",
                desc: "Disney and Pixar’s “Inside Out 2” returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone. Maya Hawke lends her voice to Anxiety, alongside Amy Poehler as Joy, Phyllis Smith as Sadness, Lewis Black as Anger, Tony Hale as Fear, and Liza Lapira as Disgust. Directed by Kelsey Mann and produced by Mark Nielsen.",
                isLiked: JSON.parse(localStorage.getItem('movie-0-liked')) || false
            },
            {
                id: 1,
                photo: Movie2,
                name: "Luca",
                desc: "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface",
                isLiked: JSON.parse(localStorage.getItem('movie-1-liked')) || false
            },
            {
                id: 2,
                photo: Movie3,
                name: "Encanto",
                desc: "Encanto tells the tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal-every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
                isLiked: JSON.parse(localStorage.getItem('movie-2-liked')) || false
            }
        ];
        setMoviesArray(initialMovies);
    }, []);

    let handleLike = (id) => {
        let updatedMoviesArray = moviesArray.map(movie => {
            if (movie.id === id) {
                let newLikedStatus = !movie.isLiked;
                localStorage.setItem(`movie-${id}-liked`, JSON.stringify(newLikedStatus));
                return { ...movie, isLiked: newLikedStatus };
            }
            return movie;
        });
        setMoviesArray(updatedMoviesArray);
    };

    let clickCloseButton = (id) => {
        let updatedMoviesArray = moviesArray.filter(item => item.id !== id);
        setMoviesArray(updatedMoviesArray);
    };

    let toggleFilter = () => {
        setIsFiltered(prevState => !prevState);
    };



    let filteredMoviesArray = isFiltered ? moviesArray.filter(movie => movie.isLiked) : moviesArray;

    return (
        <div className="home">
            <Header />
            <div className="button-div">
                <button onClick={toggleFilter} className="buttonfilter">
                    {isFiltered ? "Show All" : "Show Favorites"}
                </button>
            </div>
            <div className="home-input">
                {
                    filteredMoviesArray.filter(element => element.name.includes(movieName))
                        .map((item) => (
                            <Link to={`/movies/${item.id}`} key={item.id}>
                                <Movie
                                    photo={item.photo}
                                    name={item.name}
                                    desc={item.desc}
                                    isLiked={item.isLiked}
                                    handleClose={() => clickCloseButton(item.id)}
                                    handleLike={() => handleLike(item.id)}
                                />
                            </Link>
                        ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default Home;
