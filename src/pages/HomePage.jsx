import NewsItem from "../components/NewsItem";
import NewsItemLInk from "../components/NewsItemLInk";
import "../css/home.css";

export default function HomePage() {
  return (
    <article className="home">
      <div className="home-content">
        <header>
          <h1 className="page__title mt-0 leading-none"></h1>
        </header>
        <section className="page__content">
          <p className="m-0 mb-[1.3em] text-[1em]">
            <span style={{ color: "black", fontFamily: "Georgia" }}>
              Greetings! 👽
            </span>
          </p>
          <p
            className="text-justify text-black"
            style={{ fontFamily: "Georgia" }}
          >
            I am Emon Ghosh
            {/* (
            <button className="text-[16px]">
              pronounce <i className="fas fa-volume-up"></i>
            </button>
            ) */}
            , a Research Engineer{" "}
            <a
              href="https://www1.cs.ucr.edu/"
              className="no-underline hover:underline hover:text-black"
            >
              Advanced Intelligent Multidisciplinary Systems Lab (AIMS Lab)
            </a>{" "}
            at the at{" "}
            <a
              href="https://yuedong.us/"
              className="no-underline hover:underline hover:text-black"
            >
              United International University (UIU)
            </a>
            . I work on various data science projects and focus on applying AI
            in healthcare
          </p>
          <p
            className="text-justify text-black"
            style={{ fontFamily: "Georgia" }}
          >
            I have completed a B.Sc. in Computer Science and Engineering from
            Ahsanullah University of Science and Technology (AUST), Dhaka,
            Bangladesh. During my undergraduate studies, I was actively involved
            in problem-solving and conducted research in Machine Learning (ML)
            and Deep Learning (DL) during my final year. My research interests
            include Deep Learning, Computer Vision, Natural Language Processing,
            Vision-Language Models, Multimodal Learning, and Medical Imaging.
            {/* <span className="text-[#008000]">
              <em>
                I am open to the possibility of collaboration. Feel free to
                email.
              </em>
            </span> */}
          </p>
          <h2 id="recent-news">Recent News ⚡</h2>
          <ul className="pl-[40px] my-4" style={{ listStyle: "disc" }}>
            <NewsItem time="August 2024">
              <NewsItemLInk link="">
                Domain generalization for semantic segmentation: a survey
              </NewsItemLInk>{" "}
              got accepted in Q1 Journal
              <NewsItemLInk>
                {" "}
                Artificial Intelligence Review, Springer Nature
              </NewsItemLInk>
              .
            </NewsItem>
            <NewsItem time="August 2024">
              <NewsItemLInk link="">
                Domain generalization for semantic segmentation: a survey
              </NewsItemLInk>{" "}
              got accepted in Q1 Journal
              <NewsItemLInk>
                {" "}
                Artificial Intelligence Review, Springer Nature
              </NewsItemLInk>
              .
            </NewsItem>
          </ul>
        </section>
      </div>
    </article>
  );
}
