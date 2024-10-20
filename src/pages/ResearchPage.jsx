export default function ResearchPage() {
  return (
    <>
      <div className="archive mb-[2em]">
        <h1 className="page__title">Research</h1>
        <p className="text-justify text-black font-georgia">
          My research delves into the realms of natural language processing
          (NLP), encompassing both generation (NLG) and understanding (NLU). I
          aim to leverage contemporary NLP applications across diverse languages
          and fields in my research endeavors. Some of the research areas I have
          worked on or am currently working on are listed below.
        </p>
        {/* ITEM 1  */}
        <>
          <h2 id="1-ai-safety-on-t2i">1. AI Safety on T2I</h2>
          <p className="text-justify text-black font-georgia">
            Text-to-Image (T2I) generation models such as Stable Diffusion,
            DALL-E2, Imagen, and ediff-i have made steady progress in the field
            of image generation by bridging the semantic gap between textual
            descriptions and visual representations. Unlike traditional methods
            reliant solely on pixel manipulation, these models leverage
            multi-model alignments in latent spaces to interpret and synthesize
            complex visual content from textual prompts. Recent research shows
            that T2I models are vulnerable to adversarial perturbations in text
            prompts, such as inserting nonsensical words, phrases, or irrelevant
            characters, which can significantly bias the generated images.
            However, current adversarial attacks on T2I generation models,
            either manual heuristic-based methods or automatic gradient-based
            approaches are specifically targeting entities or objects (i.e.,
            nouns) in text prompts, neglecting other parts of speech. Therefore,
            we aim to answer the following two research questions: <br />
            <br />{" "}
            <em>
              <strong>Q1</strong>: Do adversarial attacks, particularly
              gradient-based attacks on T2I models, behave similarly when
              targeting different POS tag categories?
            </em>{" "}
            <br />
            <br />{" "}
            <em>
              <strong>Q2</strong>: Are there common or distinct features
              relevant to attack success rates (ASR) when targeting different
              POS tag categories under adversarial attacks?
            </em>
          </p>
          <h3 id="related-paper">Related Paper:</h3>
          <ul>
            <li>
              <span className="text-black font-trebuchet">
                <span className="text-[#6E2C00]">
                  Adversarial Attacks on Parts of Speech: An Empirical Study in
                  Text-to-Image Generation
                </span>
                . G M Shahariar, Jia Chen, Jiachen Li, Yue Dong.{" "}
                <span className="text-[#008000]">
                  <em>EMNLP 2024 Findings</em>
                </span>
                . <a href="https://arxiv.org/pdf/2409.15381">[PDF]</a>
              </span>
            </li>
          </ul>
        </>
        {/* ITEM 2 */}
        <>
          <h2 id="4-bias--fairness">4. Bias &amp; Fairness</h2>
          <p className="text-justify text-black font-georgia">
            The majority of AI systems and algorithms are data-driven and
            require data to be trained on. If the underlying training data has
            biases, the algorithms trained on it will learn about them and
            incorporate them into their predictions. As a result, existing
            biases in data might alter the algorithms that use the data,
            resulting in biased results. This can have significant implications,
            such as perpetuating discrimination or unfair treatment based on
            factors like race, gender, or socioeconomic status. To mitigate
            these issues, it is crucial to implement techniques such as bias
            detection and fairness-aware machine learning. Ongoing work involves
            investigating gender biases in low resource pre-trained language
            models aiming to promote fairness in AI outcomes.
          </p>
          <h3 id="ongoing-work-2">Ongoing Work:</h3>
          <ul>
            <li>
              <span className="text-black font-trebuchet">
                <span className="text-[#6E2C00]">
                  Gender Bias in Pre-trained Bengali Language Models
                </span>
                .
              </span>
            </li>
          </ul>
        </>
        {/* ITEM 3 */}
        <>
          <h2 id="13-culinary-text-classification">
            13. Culinary Text Classification
          </h2>
          <p className="text-justify text-black font-georgia">
            This specialized area of text classification focuses on analyzing
            and categorizing text data related to food, recipes, cooking
            techniques, and cuisine types. It&apos;s a niche within the broader
            field of text classification that deals specifically with culinary
            content, using NLP techniques to understand and organize recipes
            based on their ingredients, cooking methods, regional origins,
            dietary restrictions, or any other relevant culinary genre
            distinctions.
          </p>
          <h3 id="related-paper-9">Related Paper:</h3>
          <ul>
            <li>
              <span className="text-black font-trebuchet">
                <span className="text-[#6E2C00]">
                  Towards Automated Recipe Genre Classification using
                  Semi-Supervised Learning
                </span>
                . N Sakib, GM Shahariar, MM Kabir, MK Hasan, H Mahmud.{" "}
                <span className="text-[#008000]">
                  <em>Under Review</em>
                </span>
                . <a href="https://arxiv.org/pdf/2310.15693.pdf">[PDF]</a>
              </span>
            </li>
            <li>
              <span className="text-black font-trebuchet">
                <span className="text-[#6E2C00]">
                  Assorted, Archetypal and Annotated Two Million (3A2M) Cooking
                  Recipes Dataset Based on Active Learning
                </span>
                . N Sakib, GM Shahariar, MM Kabir, MK Hasan, H Mahmud.{" "}
                <em>MIET 2022</em>.{" "}
                <a href="https://arxiv.org/pdf/2303.16778.pdf">[PDF]</a>
              </span>
            </li>
          </ul>
        </>
        {/* Funding */}
        <h2 id="funding">Funding</h2>
        <p>
          <span className="text-black font-trebuchet">
            {" "}
            <b>Project ID</b>:{" "}
            <span className="text-[#6E2C00]">ARP/2021/CSE/01/2</span>
            <br /> <b>Project Title</b>:{" "}
            <a href="https://www.aust.edu/news/1037">
              Bengali Fake Reviews: A Benchmark Dataset and Detection System
            </a>
            <br /> <b>Funded by</b>:{" "}
            <span className="text-[#6E2C00]">
              Committee for Advance Studies and Research (
              <a href="https://www.aust.edu/casr">CASR</a>), AUST
            </span>
            <br /> <b>Responsibility</b>:{" "}
            <span className="text-[#6E2C00]">
              Co-Principal Investigator (CO-PI)
            </span>
            <br /> <b>Duration</b>:{" "}
            <span className="text-[#6E2C00]">May 2022 - May 2023</span>{" "}
          </span>
        </p>
      </div>
    </>
  );
}
