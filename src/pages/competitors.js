import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Competitors from '../components/Competitors'

const CompetitorPage = ({ data: {
    allCompetitorsJson: { edges },
  }, }) => {

    console.log(edges)
    // edges.forEach( competitor => competitor.node.single === 0 ? 999 : competitor.node.single );
    edges.forEach( edge => edge.node.single === 0 ? 999 : edge.node.single );

    return (
        <Layout>
            <div id="CompetitionsSection">
                <h2 className="competitionSection">Competitors</h2>
                <div>
                    <Competitors competitors={edges}></Competitors>
                </div>
            </div>
        </Layout>
  )}

export default CompetitorPage

export const competitors = graphql`
  query Competitors {
    allCompetitorsJson(sort: { order: ASC, fields: [comments, name] }) {
        totalCount,
        edges {
          node {
            name,
            comments,
            single,
            average
          }
        }
      }
  }
`
