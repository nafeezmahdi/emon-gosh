/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { PublicationPageData } from "../data/data";

export default function PublicationPage() {
  const { scholarLink, data } = PublicationPageData;

  return (
    <>
      <div className="archive">
        <h1 className="page__title">Publications</h1>
        <p>
          <span className="text-black font-georgia">
            Most recent publication updates can be found on my{" "}
            <a className="text-[#800080]" href={scholarLink}>
              <em>[Google Scholar]</em>
            </a>{" "}
            profile.
          </span>
          <br />{" "}
          <span className="text-black font-georgia">
            [*] denotes equal contribution
          </span>
        </p>
        {data.map((item) => (
          <Fragment key={item.id}>
            <h2 id={item.year}>{item.year}</h2>
            <hr />
            {item.itemsData.map((itemData) => (
              <PublicationItem data={itemData} key={itemData.id} />
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
}

function PublicationItem({ data }) {
  const [isShow, setIsShow] = useState(false);
  const item = data;

  function handleAbs(evnt) {
    evnt.preventDefault();
    setIsShow(!isShow);
  }

  return (
    <>
      <p>
        📌{" "}
        <a href={item.titleLink}>
          <span className="text-[#0000ff] font-trebuchet">
            <strong>{item.title}</strong>
          </span>
        </a>{" "}
        (
        <span className="text-red">
          <strong>{item.sideTitle}</strong>
        </span>
        )<br />{" "}
        <span className="text-black font-trebuchet">
          {" "}
          <font size="3">
            <strong>Authors</strong>:{" "}
            {item.authors.map((author, index) =>
              author === "Emon Gosh" ? (
                <strong className="!text-[#008000]" key={author}>
                  {author}
                  {index < item.authors.length - 1 && ", "}
                </strong>
              ) : (
                <Fragment key={author}>
                  {author}
                  {index < item.authors.length - 1 && ", "}
                </Fragment>
              )
            )}
          </font>{" "}
        </span>{" "}
        <br />{" "}
        <span className="text-black font-trebuchet">
          {" "}
          <font size="3">
            <strong>{item.type}: </strong>
            <em>{item.typeText}</em>
          </font>{" "}
          (<a href={item.typeLink}>{item.typeLinkText}</a>){" "}
        </span>{" "}
        <br /> [
        <a
          className="text-[red] hover:!text-[red]"
          href="#"
          onClick={handleAbs}
        >
          <font size="3">Abstract</font>
        </a>
        ] [
        <a href={item.pdfLink}>
          <span className="text-[red]">
            <font size="3">PDF</font>
          </span>
        </a>
        ]
      </p>
      <div
        id="emnlp_abstract"
        className={`abstract ${!isShow ? "hidden" : ""}`}
      >
        <p className="text-justify text-black font-monaco">
          {" "}
          <font size="3">{item.details}</font>
        </p>
      </div>
    </>
  );
}
