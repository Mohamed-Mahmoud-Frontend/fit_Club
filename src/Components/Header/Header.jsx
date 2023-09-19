import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const moblie = window.innerWidth <= 768 ? true : false;
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img className="Logo" src={Logo} alt="" />
      {MenuOpen === false && moblie === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5PX",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpen(false)} 
            activeClass="active"
            to="home"   spy={true}
            smooth={true}>
         
              Home
            </Link>
          </li>
          <li>
          <Link onClick={() => setMenuOpen(false)}
          to="Prog"
          spy={true}
          smooth={true}
          >
           program
         </Link>
          </li>
          <li>

            <Link onClick={() => setMenuOpen(false)}
             to="Reasons"
             spy={true}
             smooth={true}
             >
              why us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} 
            to="plans"
            spy={true}
            smooth={true}
            >
              plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
