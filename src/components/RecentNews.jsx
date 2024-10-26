import NewsItem from "./NewsItem";
import NewsItemLInk from "./NewsItemLInk";

export default function RecentNews() {
  return (
    <>
      <NewsItem time="August 2024">
        <NewsItemLInk link="https://link.springer.com/article/10.1007/s10462-024-10817-z">
          Domain generalization for semantic segmentation: a survey
        </NewsItemLInk>{" "}
        got accepted in Q1 Journal{" "}
        <NewsItemLInk link="https://link.springer.com/journal/10462">
          Artificial Intelligence Review
        </NewsItemLInk>
        , Springer Nature.
      </NewsItem>
      <NewsItem time="August 2024">
        Smart SuSastho Kormi: A digital platform to efficiently provide
        healthcare through pharmacy to the community towards universal health
        coverage. Under peer review at Q1 Journal{" "}
        <NewsItemLInk link="https://bmchealthservres.biomedcentral.com">
          BMC Health Services Research
        </NewsItemLInk>
        , Springer Nature.
      </NewsItem>
    </>
  );
}
