import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

const SideNavLink = ({ className, to, children }) => (
  <Link to={to} className={classNames(
    "block px-6 py-4 text-gray-700 hover:text-purple-800 bg=white hover:bg-purple-100 transition",
    className
  )}>
    {children}
  </Link>
)

export default SideNavLink