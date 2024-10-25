import { useState } from "react";

export default function Header() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="masthead">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <nav id="site-nav" className="greedy-nav z-10">
            <button className="h-btn" onClick={() => setIsShow(!isShow)}>
              {/* <div className="navicon"> */}
              {!isShow ? (
                <ion-icon
                  name="close-outline"
                  style={{ height: "24px", width: "28px" }}
                ></ion-icon>
              ) : (
                <ion-icon
                  name="menu-outline"
                  style={{ height: "24px", width: "28px" }}
                ></ion-icon>
              )}
              {/* </div> */}
            </button>
            <div className="flex">
              <ul className="visible-links table">
                <li className="masthead__menu-item masthead__menu-item--lg font-bold">
                  <a href="/" className="!ml-0 relative no-underline">
                    Emon Gosh
                  </a>
                </li>
              </ul>
              <ul
                className={`visible-links n-links  ${
                  isShow ? "!hidden" : "table"
                }`}
              >
                <li className="masthead__menu-item">
                  <a href="/home">Home</a>
                </li>
                <li className="masthead__menu-item">
                  <a href="/news">News</a>
                </li>
                <li className="masthead__menu-item">
                  <a href="/research">Research</a>
                </li>
                <li className="masthead__menu-item">
                  <a href="/publications">Publications</a>
                </li>
                {/* <li className="masthead__menu-item">
                <a href="/education">Education</a>
              </li> */}
                <li className="masthead__menu-item">
                  <a href="/resume">Resume</a>
                </li>
              </ul>
            </div>
            {/* <ul className="hidden-links hidden"></ul> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
