import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Competitors from '../components/Competitors'

const CompetitorPage = ({ data: {
    allCompetitorsJson: { edges },
  }, }) => {

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
