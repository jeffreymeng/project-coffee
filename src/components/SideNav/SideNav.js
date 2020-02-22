import React from "react"
import classNames from "classnames"
import "./SideNav.css"

const SideNav = ({ className, children }) => (
  <div className={classNames("sidenav__container", className)}>
    {children}
  </div>
);

export default SideNav;