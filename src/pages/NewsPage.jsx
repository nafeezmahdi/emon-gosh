import NewsItem from "../components/NewsItem";
import NewsItemLInk from "../components/NewsItemLInk";

export default function NewsPage() {
  return (
    <div className="news mb-8">
      <h1 className="mt-0 leading-none"></h1>
      <h1 id="2024">2024</h1>
      <ul className="pl-[40px] my-4" style={{ listStyle: "disc" }}>
        <NewsItem time="August 2024">
          <NewsItemLInk link="">
            Domain generalization for semantic segmentation: a survey
          </NewsItemLInk>
          got accepted in Q1 Journal
          <NewsItemLInk>
            Artificial Intelligence Review, Springer Nature
          </NewsItemLInk>
          .
        </NewsItem>
        <NewsItem time="August 2024">
          Smart SuSastho Kormi: A digital platform to efficiently provide
          healthcare through pharmacy to the community towards universal health
          coverage. Under peer review at Q1 Journal{" "}
          <NewsItemLInk link="">BMC Health Services Research</NewsItemLInk>,
          Springer Nature.
        </NewsItem>
      </ul>
      <h1 id="2024">2024</h1>
      <ul className="pl-[40px] my-4" style={{ listStyle: "disc" }}>
        <NewsItem time="August  2023">
          I started my job at Research Engineer At Advanced Intelligent
          Multidisciplinary Systems Lab (AIMS Lab), Institute of Research,
          United International University (UIU), Dhaka, Bangladesh.
        </NewsItem>
        <NewsItem time="January 2023">I graduated my BSc. from AUST.</NewsItem>
      </ul>
    </div>
  );
}
