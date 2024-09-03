import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Movie1 from './movie1.jpeg';
import Movie2 from './movie2.jpg';
import Movie3 from './movie3.jpg';

function App() {

  let moviesArray = [
    {
      id: 0,
      photo: Movie1,
      name: "Inside Out",
      desc: "Disney and Pixar’s “Inside Out 2” returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone. Maya Hawke lends her voice to Anxiety, alongside Amy Poehler as Joy, Phyllis Smith as Sadness, Lewis Black as Anger, Tony Hale as Fear, and Liza Lapira as Disgust. Directed by Kelsey Mann and produced by Mark Nielsen.",
      isLiked: false
    },
    {
      id: 1,
      photo: Movie2,
      name: "Luca",
      desc: "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface",
      isLiked: false
    },
    {
      id: 2,
      photo: Movie3,
      name: "Encanto",
      desc: "Encanto tells the tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal-every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      isLiked: false
    }
  ];

  return (
    <Routes>
      <Route path="/" element={<Home moviesArray={moviesArray} />} />
      <Route path="/movies/:id" element={<MovieDetails moviesArray={moviesArray} />} />
    </Routes>
  );
}

export default App;