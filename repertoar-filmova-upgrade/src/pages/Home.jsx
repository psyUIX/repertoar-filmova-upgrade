import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Dobrodošli u CinemaApp</h1>
      <p className="home-subtitle">
        Vaš digitalni bioskopski vodič — pronađite filmove, sale i cene na jednom mestu.
      </p>
      <div className="home-cards">
        <div className="home-card">
          <span className="card-icon">🎥</span>
          <h2>Repertoar</h2>
          <p>Pogledajte koji filmovi se danas prikazuju.</p>
          <Link to="/movies" className="card-btn">Idi na repertoar</Link>
        </div>
        <div className="home-card">
          <span className="card-icon">ℹ️</span>
          <h2>O aplikaciji</h2>
          <p>Saznajte više o aplikaciji i autoru.</p>
          <Link to="/about" className="card-btn">Saznaj više</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;