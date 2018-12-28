import React from 'react'
import styled from 'styled-components'

const CompetitionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-content: space-between;

  padding: 0.5em;
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
  width: 50vw;

  padding-left: 1em;

  div {
    margin: 1em 0;
  }

  span:first-child {
    font-weight: 500;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export default class Competition extends React.Component {
  render() {
    const { id, city, country, delegate, email, info, address, fee, timezone } = this.props

    const lat = parseFloat(this.props.lat)
    const lng = parseFloat(this.props.lng)

    const mapsImage =
      `https://maps.googleapis.com/maps/api/staticmap?` +
      `center=${lat},${lng}` +
      `&zoom=12` +
      `&size=400x200` +
      `&maptype=roadmap` +
      `&key=AIzaSyBUbeWkp9RjUCcW9fSGFc1WBNOlJQoNfJs` +
      `&markers=color:0x14A76C%7C${lat},${lng}`

    return (
      <CompetitionWrapper id={id}>
        <h3>{city + ', ' + country}</h3>
        <ContentWrapper>
          <MiniMap>
            <img src={mapsImage} />
          </MiniMap>
          <Infos>
            <div>
                <span>Address: </span><span>{address}</span>
            </div>
            <div>
                <span>Fee: </span><span>{fee}</span>
            </div>
            <div>{info}</div>
            <button className="btn">How to Register</button>
          </Infos>
        </ContentWrapper>
        <Divider />
      </CompetitionWrapper>
    )
  }
}
