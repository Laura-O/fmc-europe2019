import React from 'react'
import Competition from '../components/Competition'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Locations = ({ data }) => (
  <Layout>
    <div id="CompetitionsSection">
      <h2 className="competitionSection">Competition Locations</h2>
      <div>
        <ul>
          {data.allLocationsJson.edges.map(location => (
          <li key={location.node.id}>
          {location.node.country}: 
          <a href={'#' + location.node.city}> {location.node.city}</a>
          </li>
        ))}
        </ul>
      </div>
      {data.allLocationsJson.edges.map(location => (
        <Competition key={location.node.id} {...location.node} />
      ))}
    </div>
  </Layout>
)

export default Locations

export const mapMarkers = graphql`
  query Overview {
    allLocationsJson {
      edges {
        node {
          id
          lat
          lng
          country
          city
          address
          delegate
          fee
          info
          timezone
        }
      }
    }
  }
`
