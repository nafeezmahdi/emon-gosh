import { useState } from "react";
import { sidebarData } from "../data/data";

export default function Sidebar() {
  const [isShow, setIsShow] = useState(false);
  const { imageLink, name, bio, location, mail, scholar, linkedIn, github } =
    sidebarData;

  return (
    <div className="sidebar sticky-sb">
      <div itemType="http://schema.org/Person">
        {/* Image */}
        <div className="author__avatar">
          <img src={imageLink} className="author__avatar" alt="Emon Gosh" />
        </div>
        <div className="author__content">
          <h3 className="author__name">{name}</h3>
          <p className="author__bio">{bio}</p>
        </div>
        <div className="author__urls-wrapper">
          <button
            className="nav-btn btn--inverse !text-[.75em]"
            onClick={() => setIsShow(!isShow)}
          >
            Follow
          </button>
          <ul className={`author__urls social-icons ${isShow ? "!block" : ""}`}>
            <li>
              <ion-icon name="location-outline"></ion-icon> {location}
            </li>
            <li>
              <a href={`mailto:${mail}`}>
                <ion-icon name="mail-outline"></ion-icon> Email
              </a>
            </li>
            <li>
              <a href={scholar}>
                <ion-icon name="school-outline"></ion-icon> Google Scholar
              </a>
            </li>

            <li>
              <a href={linkedIn}>
                <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
              </a>
            </li>
            <li>
              <a href={github}>
                <ion-icon name="logo-github"></ion-icon> Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
