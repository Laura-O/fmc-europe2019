import React from 'react'
import Competition from '../components/Competition'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from "gatsby";

const Locations = ({ data }) => {
  function filterCompetitors(location) {
    const competitors = data.allCompetitorsJson.edges;
    let filtered = [];
    for (var i = 0; i < competitors.length; i++) {
        if (competitors[i].node.comments == location) {
            filtered.push(competitors[i]);
        }
    }
    return filtered
  }

  return (
    <Layout>
      <div id="CompetitionsSection">
        <h2 className="competitionSection">Competition Locations</h2>
        <div>
          <ul>
            {data.allLocationsJson.edges.map(location => (
            <li key={location.node.id}>
            {location.node.country}: 
            <Link to={'/locations/#' + location.node.city}> {location.node.city}</Link>
            </li>
          ))}
          </ul>
        </div>
        {data.allLocationsJson.edges.map(location => {
          const competitorsLocation = filterCompetitors(location.node.fullname)
          
          return (
            <Competition key={location.node.id} localCompetitors={competitorsLocation} {...location.node} />
          )
        })}
      </div>
    </Layout>
  )
}

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
          fullname
        }
      }
    },
    allCompetitorsJson {
        edges {
          node {
            name
            comments
          }
        }
      
    }
  }
`
