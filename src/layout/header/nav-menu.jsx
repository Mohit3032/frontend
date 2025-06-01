import Link from "next/link";
import React from "react";
import menu_data from "./menu-data.js";

const NavMenu = ({ num = false }) => {
  return (
    <ul>
      {menu_data.map((menu, index) => {
        const isValidLink = menu.link && typeof menu.link === "string" && menu.link.trim() !== "";
        const showNumber = num ? `${index < 9 ? "0" : ""}${index + 1}. ` : "";

        return (
          <li key={menu.id} className={menu.has_dropdown ? "has-dropdown" : ""}>
            {isValidLink ? (
              <Link className={`menu-link ${menu?.active || ""}`} href={menu.link}>
                {showNumber}{menu.title}
              </Link>
            ) : (
              
              <span
                className={`menu-link ${menu?.active || ""}`}
                style={{
                  padding: "15px 0",
                  margin: "0 10px",
                  fontSize: "13px",
                  color: "var(--tp-text-2)",
                  fontWeight: 700,
                  display: "block",
                  textTransform: "uppercase",
                  cursor: "pointer"
                  
                }}
              >
                {showNumber}{menu.title}
              </span>
            )}

            {menu.has_dropdown && menu.sub_menus?.length > 0 && (
              <ul className="sub-menu">
                {menu.sub_menus.map((sub_m, i) => {
                  const isValidSubMenuLink =
                    sub_m.link && typeof sub_m.link === "string" && sub_m.link.trim() !== "";

                  return (
                    <li key={i}>
                      {isValidSubMenuLink ? (
                        <Link href={sub_m.link}>{sub_m.title}</Link>
                      ) : (
                        <span
                          className="menu-link"
                          style={{ cursor: "pointer", display: "inline-block", color: "inherit" }}
                        >
                          {sub_m.title}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
