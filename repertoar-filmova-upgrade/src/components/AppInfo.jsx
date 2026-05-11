import './AboutSub.css';

function AppInfo() {
  return (
    <div className="about-sub">
      <h3>O aplikaciji</h3>
      <p>
        CinemaApp je web aplikacija za pregled dnevnog repertoara bioskopa.
        Korisnici mogu da vide koji filmovi se prikazuju, u kojoj sali i po kojoj ceni.
      </p>
      <p>
        Aplikacija je izgrađena korišćenjem React biblioteke i react-router-dom
        paketa za rutiranje između stranica.
      </p>
    </div>
  );
}

export default AppInfo;