import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from "gatsby";
import { Divider } from 'semantic-ui-react'


const CompetitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  padding: 0.5em;

  h3 {
    padding-left: 20%;
  }
`

const MainDivider = styled.hr`
  border: 0;
  margin: 1.35em auto;
  width: 100%;
  background-position: 50%;
  box-sizing: border-box;

  height: 1px;
  color: var(--green);
  background-image: linear-gradient(
    90deg,
    rgba(255, 0, 0, 0),
    var(--green) 50%,
    rgba(255, 0, 0, 0) 100%
  );
`

const MiniMap = styled.div`
  width: 45vw;
  height: 200px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    max-width: 500px;
  }
`
const Infos = styled.div`
  display: flex;
  flex-direction: column;

  width: 60vw;
  padding-left: 1em;

  div {
    margin: .5em 0;
  }

  span:first-child {
    font-weight: 500;
  }

  a {
    align-self: center;
  }

  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const CompetitorsWrapper = styled(ContentWrapper)`  
  flex-direction: column;
  align-items: flex-start;
  
  width: 60vw;

  ul {
    margin-top: 0.5em;
    font-size: 1.1rem;
    padding-left: 1em;
  }
`

export default class Competition extends React.Component {
  render() {
    const { id, city, country, delegate, email, info, address, fee, timezone, lat, lng, localCompetitors } = this.props
    const mapsURL = "https://www.google.com/maps/search/?api=1&query=";

    return (
      <CompetitionWrapper id={id}>
        <div>
          <a href={mapsURL + lat + "," + lng }><h3 id={city}>{city + ', ' + country}</h3></a>
        </div>
        <ContentWrapper>
          <Infos>
            <div>
                <span>Address: </span>
                <span>
                  <a href={mapsURL + lat + "," + lng }>
                  {address}
                  </a>
                </span>
            </div>
            <div>
                <span>Delegate: </span><span>{delegate}</span>
            </div>
            <div>
                <span>Fee: </span><span>{fee}</span>
            </div>
            <div>
                <span>Timezone: </span><span>{timezone}</span>
            </div>
            <Link to="/#AboutSection"><button className="btn">How to Register</button></Link>
          </Infos>
        </ContentWrapper>
        <ContentWrapper>
          <CompetitorsWrapper>
            <h4>Registered Competitors</h4>
            <ul>
              {
                localCompetitors.map(competitor => (
                  <li>{competitor.node.name}</li>
                ))
              }
            {localCompetitors.length <= 0 &&
              <div>No competitors registered.</div>
            }
            </ul>
          </CompetitorsWrapper>
        </ContentWrapper>
        <MainDivider />
      </CompetitionWrapper>
    )
  }
}
