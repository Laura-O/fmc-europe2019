import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import OverviewMap from '../components/Map'
import Countdown from '../components/Countdown'
import FAQ from '../components/FAQ'
import About from '../components/About'
import Welcome from '../components/Welcome'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => (
  <Layout>
    <Welcome />
    <OverviewMap markers={data.allLocationsJson.edges} />
    <Countdown date="2019-03-23T11:00:00" />
    <About aboutParagraphs={data.allAboutJson.edges} />
    <Schedule />
    <FAQ faqEntries={data.allFaqJson.edges} />
    <Footer />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query LocationsQuery {
    allLocationsJson {
      edges {
        node {
          id
          lat
          lng
          delegate
          fee
          country
          city
          address
          info
        }
      }
    },
    allAboutJson {
      edges {
        node {
          id
          paragraph
        }
      }
    },
     allFaqJson {
      edges {
        node {
          id
          question
          answer
        }
      }
    }
  }
`
