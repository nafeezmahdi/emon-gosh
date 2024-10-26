import NewsItem from "../components/NewsItem";
import NewsItemLInk from "../components/NewsItemLInk";
import RecentNews from "../components/RecentNews";

export default function NewsPage() {
  return (
    <div className="news mb-8">
      <h1 className="mt-0 leading-none"></h1>
      <h1 id="2024">2024</h1>
      <ul className="pl-[40px] my-4" style={{ listStyle: "disc" }}>
        <RecentNews />
      </ul>
      <h1 id="2023">2023</h1>
      <ul className="pl-[40px] my-4" style={{ listStyle: "disc" }}>
        <NewsItem time="August  2023">
          I started my job at Research Engineer At{" "}
          <NewsItemLInk link="https://aimsl.uiu.ac.bd">
            Advanced Intelligent Multidisciplinary Systems Lab (AIMS Lab)
          </NewsItemLInk>
          , Institute of Research, Innovation, Incubation and Commercialization
          (IRIIC),{" "}
          <NewsItemLInk link="https://www.uiu.ac.bd">
            United International University (UIU)
          </NewsItemLInk>
          , Dhaka, Bangladesh.
        </NewsItem>
        <NewsItem time="January 2023">
          I graduated my BSc. from{" "}
          <NewsItemLInk link="https://www.aust.edu/">AUST</NewsItemLInk>.
        </NewsItem>
      </ul>
    </div>
  );
}
