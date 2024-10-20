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
            I am G M Shahariar Shibli (
            <button className="text-[16px]">
              pronounce <i className="fas fa-volume-up"></i>
            </button>
            ), a first year PhD Student in the Computer Science and Engineering
            department at the{" "}
            <a
              href="https://www1.cs.ucr.edu/"
              className="no-underline hover:underline hover:text-black"
            >
              University of California, Riverside
            </a>
            . I am currently working in the Natural Language Processing group at
            UCR and very fortunate to be advised by{" "}
            <a
              href="https://yuedong.us/"
              className="no-underline hover:underline hover:text-black"
            >
              Professor Yue Dong
            </a>
            . At present, I am investigating bias, fairness and safety in LLMs
            and Text-to-Image (T2I) generation models.
          </p>
          <p
            className="text-justify text-black"
            style={{ fontFamily: "Georgia" }}
          >
            Prior to that I worked as a Lecturer at the Department of CSE,
            Ahsanullah University of Science and Technology. I obtained my
            Bachelor&apos;s degree in CSE from the same university. My career
            aspiration is to work in leading AI research laboratories.{" "}
            <span className="text-[#008000]">
              <em>
                I am open to the possibility of collaboration. Feel free to
                email.
              </em>
            </span>
          </p>
          <p
            className="text-justify text-black"
            style={{ fontFamily: "Georgia" }}
          >
            My past research works were intended to tackle low resource NLP,
            covering areas like <em>natural language generation</em>,{" "}
            <em>summarization</em>, <em>question answering (QA)</em>, and{" "}
            <em>interpretability of language models</em>. I had utilized
            cutting-edge techniques like <em>generative</em> and{" "}
            <em>contrastive learning</em> to improve language generation and{" "}
            <em>representation learning</em> for low resource language.
            Additionally, I had applied natural language processing in specific{" "}
            <em>software engineering (SE)</em> tasks.
          </p>
          <h2 id="recent-news">Recent News ⚡</h2>
          <ul>
            <li>
              <span style={{ fontFamily: "Monaco", color: "black" }}>
                <span className="text-[#a52a2a]">[September 2024]</span>{" "}
                <a href="https://arxiv.org/pdf/2409.15381">
                  Adversarial Attack on POS Tags in T2I models
                </a>{" "}
                got accepted in{" "}
                <a href="https://2024.emnlp.org/">EMNLP 2024 findings</a>!
              </span>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
