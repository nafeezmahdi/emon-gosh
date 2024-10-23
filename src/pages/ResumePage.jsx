export default function ResumePage() {
  return (
    <>
      <div className="archive">
        <h1 className="page__title">CV</h1>
        <p>
          <span className="text-black font-georgia">
            You can download a pdf copy of my{" "}
            <a href="../files/CV/CV-of-Shibli.pdf">[CV]</a> here.
          </span>
        </p>
        <iframe
          src="/pdf/shakil.pdf"
          width="100%"
          height="700"
          title="PDF Viewer"
          style={{ border: "none" }}
        ></iframe>
        <p>
          <br />
        </p>
        <h2 id="email">Email</h2>
        <ul>
          <li>
            <span className="text-black font-georgia">
              sshibli745[AT]gmail[DOT]com
            </span>
            <br />
          </li>
          <li>
            <span className="text-black font-georgia">
              gm[DOT]shahariar[AT]email[DOT]ucr[DOT]edu
            </span>
          </li>
        </ul>
        <h2 id="social-media">Social Media</h2>
        <p>
          <span className="text-black font-georgia">
            {" "}
            You can find me on{" "}
            <a href="https://www.linkedin.com/in/shahariar-shibli/">
              LinkedIn
            </a>{" "}
            and <a href="https://twitter.com/G_M_Shahariar">Twitter</a>.{" "}
          </span>
        </p>
      </div>
    </>
  );
}
