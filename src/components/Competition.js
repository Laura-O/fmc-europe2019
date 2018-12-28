import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby";


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

const Divider = styled.hr`
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
    margin: 1em 0;
  }

  span:first-child {
    font-weight: 500;
  }

  a {
    align-self: center;
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

export default class Competition extends React.Component {
  render() {
    const { id, city, country, delegate, email, info, address, fee, timezone, lat, lng } = this.props
    const mapsURL = "https://www.google.com/maps/search/?api=1&query=";

    const latFloat = parseFloat(this.props.lat)
    const lngFloat = parseFloat(this.props.lng)

    const mapsImage =
      `https://maps.googleapis.com/maps/api/staticmap?` +
      `center=${lat},${lng}` +
      `&zoom=12` +
      `&size=400x200` +
      `&maptype=roadmap` +
      `&key=AIzaSyBUbeWkp9RjUCcW9fSGFc1WBNOlJQoNfJs` +
      `&markers=color:0x1995AD%7C${latFloat},${lngFloat}`

    return (
      <CompetitionWrapper id={id}>
        <div>
          <a href={mapsURL + lat + "," + lng }><h3 id={city}>{city + ', ' + country}</h3></a>
        </div>
        <ContentWrapper>
          {/* <MiniMap>
            <img src={mapsImage} />
          </MiniMap> */}
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
        <Divider />
      </CompetitionWrapper>
    )
  }
}
