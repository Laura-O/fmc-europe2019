import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import OverviewMap from '../components/Map'
import Countdown from '../components/Countdown'
import FAQ from '../components/FAQ'
import About from '../components/About'
import Welcome from '../components/Welcome'

const IndexPage = ({ data }) => (
  <Layout>
    <Welcome />
    <OverviewMap markers={data.allLocationsJson.edges} />
    <Countdown date="2019-02-24T00:00:00" />
    <About />
    <FAQ />
  </Layout>
)

export default IndexPage

export const mapMarkers = graphql`
  query LocationsQuery {
    allLocationsJson {
      edges {
        node {
          id
          lat
          lng
          delegate
          email
          fee
          country
          city
          info
        }
      }
    }
  }
`
