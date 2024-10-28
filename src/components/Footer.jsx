export default function Footer() {
  return (
    <div className="page__footer">
      <footer>
        {/* <a href="/sitemap/" className="text-inherit no-underline">
          Sitemap
        </a> */}
        <div className="page__footer-follow">
          <ul className="social-icons m-0 p-0 list-none">
            <li>
              <strong>Follow:</strong>
            </li>
            <li>
              <a href="https://github.com/EEE001">
                <ion-icon name="logo-github"></ion-icon> GitHub
              </a>
            </li>
            {/* <li>
              <a href="https://shahariar-shibli.github.io/feed.xml">
                <i className="fa fa-fw fa-rss-square" aria-hidden="true"></i>{" "}
                Feed
              </a>
            </li> */}
          </ul>
        </div>
        <div className="page__footer-copyright">
          © 2024 Emon Ghosh. Powered by{" "}
          <a href="http://jekyllrb.com" rel="nofollow">
            Jekyll
          </a>{" "}
          &amp;{" "}
          <a href="https://github.com/academicpages/academicpages.github.io">
            AcademicPages
          </a>
          , a fork of{" "}
          <a
            href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/"
            rel="nofollow"
          >
            Minimal Mistakes
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
