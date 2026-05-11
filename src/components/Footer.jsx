import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} CinemaApp &mdash; Autor: <strong>Tvoje Ime</strong>
      </p>
      <p className="footer-sub">Projekat za kurs Veb programiranje</p>
    </footer>
  );
}

export default Footer;