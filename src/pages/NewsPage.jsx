import NewsItem from "../components/NewsItem";
import NewsItemLInk from "../components/NewsItemLInk";

export default function NewsPage() {
  return (
    <div className="news mb-8">
      <h1 className="mt-0 leading-none"></h1>
      <h1 id="2024">2024</h1>
      <ul>
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
      </ul>
    </div>
  );
}
