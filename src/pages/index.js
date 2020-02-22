import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => (
  <Layout transparentNav>
    <SEO title="Home" />

    <div className="max-w-6xl m-auto">
      <h3 className="text-white text-center text-lg sm:text-xl" style={{ "marginTop": "20vh" }}>April 4, 2020</h3>
      <h1 className="text-white text-center text-4xl sm:text-6xl">South Bay MUN IV</h1>

      <div className="text-center mt-12">
        <Link className="btn btn-purple text-lg mr-6 sm:text-xl sm:mr-10" to="/register">
          Register Now
        </Link>
        <a className="btn btn-purple-inverse text-lg sm:text-xl" href="mailto:southbaymun@gmail.com">
          Contact Us
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
