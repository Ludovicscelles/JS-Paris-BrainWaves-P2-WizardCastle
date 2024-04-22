import "./Footer.css";
import Info from "./Info";

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
      name: "Ludovic Scelles",
      linktogithub: "https://github.com/vvdam",
      linktox: "https://twitter.com/vdam_mp4",
      linktolinkedin: "https://www.linkedin.com/in/adam-maaloul-17564026a/s",
    },
  ];
  return (
    <div className="footer">
      <div className="containerFooter">
        <h1>About</h1>
        {workers.map((person) => (
          <Info key={person.name} worker={person} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
