/* eslint-disable react/prop-types */
import { ResearchPageData } from "../data/data";

export default function ResearchPage() {
  const { infoText, items } = ResearchPageData;

  return (
    <>
      <div className="archive mb-[2em]">
        <h1 className="page__title">Research</h1>
        <p className="text-justify text-black font-georgia">{infoText}</p>
        {/* ITEM   */}
        {items.map((item) => (
          <Item key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
    </>
  );
}

function Item({ title, text }) {
  return (
    <>
      <h2 id="1-ai-safety-on-t2i">{title}</h2>
      <p className="text-justify text-black font-georgia">
        {text}
        <br />
      </p>
    </>
  );
}
