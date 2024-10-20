export default function Header() {
  return (
    <div className="masthead">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <nav id="site-nav" className="greedy-nav z-10">
            {" "}
            <button className="hidden invisible">
              <div className="navicon"></div>
            </button>
            <ul className="visible-links table">
              <li className="masthead__menu-item masthead__menu-item--lg font-bold">
                <a href="/" className="ml-0 relative no-underline">
                  G M Shahariar Shibli
                </a>
              </li>
              <li className="masthead__menu-item">
                <a href="/home">Home</a>
              </li>
              <li className="masthead__menu-item">
                <a href="/news">News</a>
              </li>
              <li className="masthead__menu-item">
                <a href="/research">Research</a>
              </li>
              <li className="masthead__menu-item">
                <a href="/publications">Publications</a>
              </li>
              <li className="masthead__menu-item">
                <a href="/education">Education</a>
              </li>
              <li className="masthead__menu-item">
                <a href="/resume">Resume</a>
              </li>
            </ul>
            <ul className="hidden-links hidden"></ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
