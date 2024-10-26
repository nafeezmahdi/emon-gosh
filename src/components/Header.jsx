import { useEffect, useState } from "react";

export default function Header() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // Function to check the width and set `isShow` accordingly
    const checkWidth = () => {
      const width = window.innerWidth;
      // console.log("Browser width:", width);
      setIsShow(width >= 925);
    };

    // Run the check once on component mount
    checkWidth();

    // Add an event listener for resize to update `isShow` on width change
    window.addEventListener("resize", checkWidth);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <div className="masthead">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <nav id="site-nav" className="greedy-nav z-10">
            <button className="h-btn" onClick={() => setIsShow(!isShow)}>
              {/* <div className="navicon"> */}
              {isShow ? (
                <ion-icon
                  name="close-outline"
                  style={{ height: "28px", width: "28px" }}
                ></ion-icon>
              ) : (
                <ion-icon
                  name="menu-outline"
                  style={{ height: "28px", width: "28px" }}
                ></ion-icon>
              )}
              {/* </div> */}
            </button>
            <div className="grid grid-cols-[auto_1fr] gap-[6.8%]">
              <ul className="visible-links table">
                <li className="masthead__menu-item masthead__menu-item--lg font-bold">
                  <a href="/" className="!ml-0 relative no-underline">
                    Emon Gosh
                  </a>
                </li>
              </ul>
              <ul
                className={`visible-links n-links ${isShow ? "" : "!hidden"}`}
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
