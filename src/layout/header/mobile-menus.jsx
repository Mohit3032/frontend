import Link from "next/link";
import React, { useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");

  // openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle(""); // Close the menu
    } else {
      setNavTitle(menu); // Open the menu
    }
  };

  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.has_dropdown ? (
              <li className="has-dropdown">
                {/* Render link if there's a valid link */}
                {menu.title !== 'Shop' ? (
                  <Link href={menu.link} className="menu-link">
                    {menu.title}
                  </Link>
                ) : (
                  <span className="menu-link">{menu.title}</span> // No link for 'Shop'
                )}
                <a
                  className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  <i className={`fal fa-plus ${navTitle === menu.title ? "rotate" : ""}`}></i>
                </a>

                {/* Dropdown menu (sub-menu) */}
                {navTitle === menu.title && menu.sub_menus?.length > 0 && (
                  <ul className="sub-menu">
                    {menu.sub_menus.map((sub_m, idx) => (
                      <li key={idx}>
                        <Link href={sub_m.link} className="menu-link">
                          {sub_m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link href={menu.link} className="menu-link">
                  {menu.title}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
