import { Link } from "gatsby"
import React, { useState } from "react"
import classNames from "classnames"

import "./Header.css"

const NavLink = ({ to, href, transparent, children }) => {
  const classes = classNames("block lg:inline-block transition py-3 px-6 lg:p-5", {
    "text-gray-700 hover:text-purple-900 hover:bg-purple-100": !transparent,
    "text-gray-500 hover:text-purple-100": transparent,
  });

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  else return <a href={href} className={classes}>{children}</a>;
}

const Header = ({ transparent }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={classNames({
      "bg-white shadow-md relative z-10": !transparent,
    })}>
      <div className="flex items-stretch justify-between flex-wrap max-w-6xl m-auto py-4 lg:py-0">
        <div className={classNames("mr-3 flex items-stretch transition", {
          "text-purple-800 font-semibold hover:bg-purple-100": !transparent,
          "text-gray-400 hover:text-purple-100": transparent,
        })}>
          <Link className="text-xl tracking-light flex items-center px-5" to="/">South Bay MUN</Link>
        </div>
        <div className="block mr-5 lg:hidden">
          <button
            className={classNames("flex items-center px-3 py-2 border rounded", {
              "border-gray-200 text-gray-200": transparent,
              "border-gray-600 text-gray-600": !transparent
            })}
            onClick={() => setShowNav(!showNav)}>
            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={classNames(
          "nav w-full block lg:w-auto flex-grow shadow-md lg:shadow-none",
          {"nav-show": showNav, "nav-hide": !showNav},
          {"bg-black": transparent, "bg-white": !transparent}
        )}
             style={{ top: "60px" }}>
          <div className="pt-2 pb-6 lg:px-5 lg:p-0 lg:flex lg:items-center">
            {/* WARNING: before adding new links, modify layout.css .nav-show */}
            <div className="lg:flex-grow">
              <NavLink to="/about" transparent={transparent}>About</NavLink>
              <NavLink to="/committees" transparent={transparent}>Committees</NavLink>
              <NavLink to="/info" transparent={transparent}>Event Info</NavLink>
              <NavLink href="mailto:southbaymun@gmail.com" transparent={transparent}>Contact Us</NavLink>
            </div>
            <div>
              <Link to="/register"
                    className={classNames("inline-block px-4 py-2 leading-none border rounded-lg mt-2 ml-6 lg:m-0 transition", {
                      "text-purple-800 border-purple-800 hover:text-purple-100 hover:bg-purple-800": !transparent,
                      "text-purple-200 border-purple-200 hover:text-purple-100 hover:bg-purple-600 hover:border-purple-600": transparent,
                    })}>
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
