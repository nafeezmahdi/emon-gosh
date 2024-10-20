export default function AcademicPage() {
  return (
    <>
      <div className="archive">
        <h1 className="page__title">Education</h1>
        <p>
          <span className="font-georgia text-black">
            {" "}
            <span className="text-black text-[20px]">
              <b>
                <a href="https://www1.cs.ucr.edu/" target="_blank">
                  University of California, Riverside
                </a>
              </b>
            </span>
            <br /> Doctor of Philosophy (Ph.D.) <br /> Computer Science and
            Engineering <br /> Duration: 2024 - ongoing <br /> CGPA:{" "}
            <b>x.xx/4.00</b> scale <br /> Supervisor:{" "}
            <a
              className="text-amber-600"
              href="https://profiles.ucr.edu/app/home/profile/yued"
            >
              Dr. Yue Dong
            </a>
            <br />{" "}
          </span>
        </p>
        <p>
          <span className="font-georgia text-black">
            {" "}
            <span className="text-black text-[20px] font-calisto">
              <b>
                <a href="https://aust.edu" target="_blank">
                  Ahsanullah University of Science and Technology
                </a>
              </b>
            </span>
            <br /> Bachelor of Science (B.Sc.)
            <br /> Computer Science and Engineering [
            <a href="https://shahariar-shibli.github.io/files/Education/BSc_Certificate.pdf">
              Certificate
            </a>
            ]<br /> Duration: 2014 - 2018 <br /> CGPA: <b>3.973/4.00</b> scale
            (Ranked{" "}
            <b>
              1<sup>st</sup>
            </b>
            ) [
            <a href="https://shahariar-shibli.github.io/files/Education/BSc_Transcript.pdf">
              Transcript
            </a>
            ]<br />{" "}
          </span>
        </p>
        <h2 id="awards">Awards</h2>
        <p>
          <span className="font-georgia text-black">
            {" "}
            🏆{" "}
            <span className="text-amber-600">
              Dean’s Distinguished Fellowship Award
            </span>
            , University of California, Riverside, 2024 <br /> 🏆{" "}
            <span className="text-amber-600">Prime Minister Gold Medal</span>,
            University Grants Commission of Bangladesh, 26 February, 2020{" "}
          </span>
        </p>
      </div>
    </>
  );
}
