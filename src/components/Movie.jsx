import React from 'react';
import './Movie.css';

function Movie(props) {
  const price = props.price ?? 300;

  return (
    <div className="movie">
      <img src={props.poster} alt={props.title} />
      <div className="movie-info">
        <h3>{props.title}</h3>

        {props.hall
          ? <p>Sala: <strong>{props.hall}</strong></p>
          : <p className="not-available">Film još uvek nije u ponudi</p>
        }

        <p>Cena: <strong>{price} din</strong></p>

        <div className="movie-actions">
          <button onClick={() => props.onReaction(props.title, "Like")}>👍 Like</button>
          <button onClick={() => props.onReaction(props.title, "Dislike")}>👎 Dislike</button>
        </div>
      </div>
    </div>
  );
}

export default Movie;