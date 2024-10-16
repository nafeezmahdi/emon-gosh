/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        {/* <div className="" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
          <svg viewBox="0 0 24 24" stroke="currentColor" focusable="false">
            <g transform="translate(12,12)">
              <path
                className="hlJH0"
                d="M-9 -5 L9 -5"
                fill="none"
                strokeWidth="2"
              ></path>
              <path
                className="HBu6N"
                d="M-9 0 L9 0"
                fill="none"
                strokeWidth="2"
              ></path>
              <path d="M-9 5 L9 5" fill="none" strokeWidth="2"></path>
            </g>
          </svg>
        </div> */}
        <nav
          className="navbar nav-left"
          style={{ backgroundColor: "rgb(0, 0, 0)" }}
          role="navigation"
        >
          <a href="/home" className="nav-name hidden">
            <span>EMON GOSH</span>
          </a>
          <ul className="nav-list">
            <NavItem itemTitle="Home" itemTo="/home" />
            <NavItem itemTitle="Research" itemTo="/research" />
            <NavItem itemTitle="Publication" itemTo="/publication" />
            <NavItem itemTitle="Experience" itemTo="/experience" />
            <NavItem
              itemTitle="Education & Awards"
              itemTo="/education-awards"
            />
            <NavItem itemTitle="Resume" itemTo="/resume" />
            <NavItem itemTitle="Contact" itemTo="/contact" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ itemTitle, itemTo }) {
  return (
    <li className="nav-list-item">
      <div className="nav-item item-p pl-9 leading-[1.21] font-lato text-[12pt] pr-3 decoration-[inherit]">
        <div className="relative">
          <Link
            to={itemTo}
            className="nav-item-link item-link !whitespace-normal decoration-[inherit] !pl-1 py-[11.5px]"
          >
            {itemTitle}
          </Link>
        </div>
      </div>
    </li>
  );
}
