import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import Breadcrumb from "../components/breadcrumb"
import Heading from "../components/heading"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Breadcrumb
      breadcrumb={
        [
          {
            name: `Home`,
            path: `/`,
          },
          {
            name: `404: Not found`,
          },
        ]
      }
    />
    <Heading text="404: NOT FOUND" />
    <Main>
      <h3>404: NOT FOUND</h3>
    </Main>
  </Layout >
)

export default NotFoundPage
