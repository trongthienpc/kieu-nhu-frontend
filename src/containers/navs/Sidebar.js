import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Nav, NavItem } from "reactstrap";
import classnames from "classnames";

import menuItems from "../../constants/menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [selectedParentMenu, setSeletedParentMenu] = useState("");
  const [viewingParentMenu, setViewingParentMenu] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState("");

  const filteredList = (menuItems) => {
    return menuItems;
  };
  return (
    <div className="sidebar">
      <div className="main-menu">
        <div className="scroll">
          <PerfectScrollbar>
            <Nav vertical className="list-unstyled">
              {menuItems &&
                filteredList(menuItems).map((item) => {
                  return (
                    <NavItem
                      key={item.id}
                      className={classnames({
                        active:
                          (selectedParentMenu === item.id &&
                            viewingParentMenu === "") ||
                          viewingParentMenu === item.id,
                      })}
                    >
                      {item.newWindow ? (
                        <a
                          href={item.to}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className={item.icon} /> {item.label}
                        </a>
                      ) : (
                        <NavLink
                          to={item.to}
                          onClick={(e) => this.openSubMenu(e, item)}
                          data-flag={item.id}
                        >
                          <i className={item.icon} /> {item.label}
                        </NavLink>
                      )}
                    </NavItem>
                  );
                })}
            </Nav>
          </PerfectScrollbar>
        </div>
      </div>
      <div className="sub-menu"></div>
    </div>
  );
};

export default Sidebar;
