import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import classNames from "classnames"
import "./Markdown.css"

const Markdown = ({ className, content }) => (
  <div className={classNames("markdown-section", className)}>
    <MDXRenderer>{content}</MDXRenderer>
  </div>
);

export default Markdown