import "./Footer.css";
import Info from "./Info";

function Footer() {
  const workers = [
    {
      name: "Adam Maaloul",
      linktogithub: "https://github.com/vvdam",
      linktolinkedin: "https://www.linkedin.com/in/adam-maaloul-17564026a/s",
    },
    {
      name: "Antoine Delalande",
      linktogithub: "https://github.com/Hamsolovski",
      linktolinkedin: "https://www.linkedin.com/in/antoine-delalande-678777b3/",
    },
    {
      name: "Charlie Le",
      linktogithub: "https://github.com/JyAjAn",
      linktolinkedin: "https://www.linkedin.com/in/charlie-le-7806672bb/",
    },
    {
      name: "Ludovic Scelles",
      linktogithub: "https://github.com/Ludovicscelles",
      linktolinkedin: "https://www.linkedin.com/in/ludovic-scelles-56b05913b/",
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
