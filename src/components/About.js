import about from "../imgs/about.webp";

function About() {
  return (
    <div>
      <div className="about" id="about">
        <div className="square">
          <h2>About</h2>
          <h3>Play real time matches against other players</h3>
          <p>
            Players join real time matches featuring different cats and engage
            in fierce combats to show their skills over the rest of the players.
          </p>
          <p>
            Every player has a semi-automatic weapon that can shoot in any
            direction and inflicts an amount of damage to other players, which
            will result in them losing a life. Each player has 3 lives and when
            they run out, they lose. Eventually, there will be only one player
            standing, and they will be the winner and will take the prize.{" "}
          </p>
        </div>
        <div className="img-container">
          <img src={about} alt="cat with gun" />
        </div>
      </div>
    </div>
  );
}

export default About;
