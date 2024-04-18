import "./Footer.css";
import PropTypes from "prop-types";

function Info({ worker }) {
  return (
    <div className="info">
      <h2 className="titleAbout"> {worker.name} </h2>
      <br />
      <div className="profil">
        <a href={worker.linktogithub}>
          <p>github</p>
        </a>
        <br />
        <a href={worker.linktolinkedin}>
          <p>linkedin</p>
        </a>
        <br />
        <a href={worker.linktox}>
          <p>Twitter</p>
        </a>
      </div>
    </div>
  );
}
Info.propTypes = {
  worker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    linktogithub: PropTypes.string.isRequired,
    linktox: PropTypes.string.isRequired,
    linktolinkedin: PropTypes.string.isRequired,
  }).isRequired,
};
function Footer() {
  const workers = [
    {
      name: "Adam Maaloul",
      linktogithub: "https://github.com/vvdam",
      linktox: "https://twitter.com/vdam_mp4",
      linktolinkedin: "https://www.linkedin.com/in/adam-maaloul-17564026a/s",
    },
    {
      name: "Antoine Delalande",
      linktogithub: "https://github.com/vvdam",
      linktox: "https://twitter.com/vdam_mp4",
      linktolinkedin: "https://www.linkedin.com/in/adam-maaloul-17564026a/s",
    },
    {
      name: "Charlie Le",
      linktogithub: "https://github.com/vvdam",
      linktox: "https://twitter.com/vdam_mp4",
      linktolinkedin: "https://www.linkedin.com/in/adam-maaloul-17564026a/s",
    },
    {
      name: "Ludovic Scelle",
      linktogithub: "https://github.com/vvdam",
      linktox: "https://twitter.com/vdam_mp4",
      linktolinkedin: "https://www.linkedin.com/in/adam-maaloul-17564026a/s",
    },
  ];
  return (
    <div className="footer">
      <div className="containerFooter">
        <h1>About</h1>
        <Info worker={workers[0]} />
        <Info worker={workers[1]} />
        <Info worker={workers[2]} />
        <Info worker={workers[3]} />
      </div>
    </div>
  );
}

export default Footer;
