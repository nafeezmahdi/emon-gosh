export default function Sidebar() {
  return (
    <div className="sidebar sticky">
      <div itemType="http://schema.org/Person">
        <div className="author__avatar">
          {" "}
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGrsBzp0aX0cg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679467903252?e=1734566400&v=beta&t=usAGBnAeAsCU_BnY1uE6kSN4dwxtBpVodjFMo3PrwWg"
            className="author__avatar"
            alt="Emon Gosh"
          />
        </div>
        <div className="author__content">
          <h3 className="author__name">Emon Gosh</h3>
          <p className="author__bio">
            PhD Student @ UC Riverside || LLMs, AI Safety, Bias &amp; Fairness
          </p>
        </div>
        <div className="author__urls-wrapper">
          {" "}
          <button className="btn btn--inverse">Follow</button>
          <ul className="author__urls social-icons">
            <li>
              <i className="fa fa-fw fa-map-marker" aria-hidden="true"></i>{" "}
              Riverside, California, USA
            </li>
            <li>
              <a href="mailto:sshibli745@gmail.com">
                <i className="fas fa-fw fa-envelope" aria-hidden="true"></i>{" "}
                Email
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=GBaSF7MAAAAJ&amp;hl=en">
                <i className="fas fa-fw fa-graduation-cap"></i> Google Scholar
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/profile/G-Shahariar">
                <i className="fab fa-fw fa-researchgate" aria-hidden="true"></i>{" "}
                ResearchGate
              </a>
            </li>
            <li>
              <a href="https://www.semanticscholar.org/author/G.-M.-Shahariar/100649170">
                <i className="fas fa-graduation-cap"></i> Semantic Scholar
              </a>
            </li>
            <li>
              <a href="https://www.scopus.com/authid/detail.uri?authorId=57844100100">
                <i className="fas fa-graduation-cap"></i> Scopus
              </a>
            </li>
            <li>
              <a href="http://orcid.org/0000-0001-9757-7663">
                <i className="ai ai-orcid-square ai-fw"></i> ORCID
              </a>
            </li>
            <li>
              <a href="https://twitter.com/G_M_Shahariar">
                <i
                  className="fab fa-fw fa-twitter-square"
                  aria-hidden="true"
                ></i>{" "}
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shahariar-shibli">
                <i className="fab fa-fw fa-linkedin" aria-hidden="true"></i>{" "}
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/shahariar-shibli">
                <i className="fab fa-fw fa-github" aria-hidden="true"></i>{" "}
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
