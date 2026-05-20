import React, { useState } from 'react';
import Movie from '../components/Movie';
import MovieForm from '../components/MovieForm';
import './Movies.css';

const initialMovies = [
  { title: "Captain America - The First Avenger", hall: 2, price: 350, poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg", likes: 0, dislikes: 0 },
  { title: "The Papillon", hall: 1, price: 300, poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg", likes: 0, dislikes: 0 },
  { title: "The Lost City of Z", hall: 5, price: 500, poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", likes: 0, dislikes: 0 },
  { title: "Klaus", hall: 3, poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg", likes: 0, dislikes: 0 },
  { title: "Bullet Train", poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg", likes: 0, dislikes: 0 }
];

function Movies() {
  const [movies, setMovies] = useState(initialMovies);
  const [editMovie, setEditMovie] = useState(null);
  const today = new Date().toLocaleDateString('sr-RS');

  function handleReaction(title, reaction) {
    setMovies(prev => prev.map(movie => {
      if (movie.title === title) {
        return reaction === "Like"
          ? { ...movie, likes: movie.likes + 1 }
          : { ...movie, dislikes: movie.dislikes + 1 };
      }
      return movie;
    }));
  }

  function handleAddMovie(newMovie) {
    if (editMovie) {
      setMovies(prev => prev.map(m => m.title === editMovie.title ? newMovie : m));
      setEditMovie(null);
    } else {
      setMovies(prev => [...prev, newMovie]);
    }
  }

  function handleEdit(movie) {
    setEditMovie(movie);
  }

  function handleCancelEdit() {
    setEditMovie(null);
  }

  return (
    <div className="movies-page">
      <h1>Repertoar za danas ({today})</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <Movie
            key={movie.title}
            title={movie.title}
            hall={movie.hall}
            price={movie.price}
            poster={movie.poster}
            likes={movie.likes}
            dislikes={movie.dislikes}
            onReaction={handleReaction}
            onEdit={handleEdit}
          />
        ))}
      </div>
      <MovieForm
        onSubmit={handleAddMovie}
        editMovie={editMovie}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
}

export default Movies;