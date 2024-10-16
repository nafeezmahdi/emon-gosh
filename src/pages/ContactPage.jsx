import { Link } from "react-router-dom";
import { contactsData } from "../data/data";

/* eslint-disable react/prop-types */
export default function ContactPage() {
  const { address, phone, email, linkedIn, scholar } = contactsData;

  return (
    <>
      <section className="content">
        {/* <div></div> */}
        <div className="table-cell align-middle w-full mx-auto">
          <div className="content-item mx-auto">
            <span className="title-text ">Contacts</span>
          </div>
        </div>
      </section>
      <section className="content">
        {/* <div></div> */}
        <div className="table-cell align-middle w-full mx-auto">
          <div className="content-item mx-auto">
            <div className="contact-lists p-[8px] break-words relative w-full">
              <ContactTextInfo
                infoTitle={address?.name}
                infoValue={address?.info}
              />

              <ContactTextInfo
                infoTitle={phone?.name}
                infoValue={phone?.info}
              />

              <ContactLinkInfo
                infoTitle={email?.name}
                infoValue={email?.info}
              />

              <ContactLinkInfo
                infoTitle={linkedIn?.name}
                infoValue={linkedIn?.info}
              />

              <ContactLinkInfo
                infoTitle={scholar?.name}
                infoValue={scholar?.info}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactTextInfo({ infoTitle, infoValue }) {
  return (
    <p className="!mt-0 !pt-0">
      <span className="cont">{infoTitle}</span>
      <span>&nbsp; </span>
      <span className="cont !font-[400]">{infoValue}</span>
    </p>
  );
}

function ContactLinkInfo({ infoTitle, infoValue }) {
  return (
    <p className="!mt-0 !pt-0">
      <span className="cont">{infoTitle}</span>
      <span>&nbsp; </span>
      {infoTitle === "E-mail:" ? (
        <Link to={`mailto:${infoValue}`}>
          <span className="cont !font-[400] underline">{infoValue}</span>
        </Link>
      ) : (
        <Link to={infoValue}>
          <span className="cont !font-[400] underline">{infoValue}</span>
        </Link>
      )}
    </p>
  );
}
