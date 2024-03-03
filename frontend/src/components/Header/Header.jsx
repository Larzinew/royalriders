import React from "react";
import { useEffect, useRef } from "react";
import { NavLink, Link} from "react-router-dom";

const navlinks = [
  {
  path: "/home",
  display: "Home",
  },

  {
    path: "/drivers",
    display: "Drivers",
  },
  
  {
    path: "/services",
    display: "Home",
  },

  {
    path: "/contact",
    display: "Contact",
  },

]




const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-center">
          {/* ======= logo ========= */}
          <img src="" alt="" />
        </div>
         {/* ======= menu ========= */}
        <div className="navigation">
          <ul className="menu flex items-center gap-[2.7rem]">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink>
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor-[16px] leading-[7px] font-[600]"
                      : "text-textColor-[16px] leading-[7px] font-[500] hover: text-primaryColor"
                  }
    
                  {link.display}
                </Navlink>
              </li>
            ))}
          </ul>
        </div>
         {/* ======= nav right ========= */}
        <div className="flex items-center gap-4">
        <link to="/">
          <figure>
            <img src="" alt=""/>
          </figure>

        </link>
        </div> 
      </div>
    </header>
  );
};

export default Header;
