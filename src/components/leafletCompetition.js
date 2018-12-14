import React from 'react'
import styled from 'styled-components'

import Leaflet from 'leaflet'
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

const CompetitionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-content: space-between;

  padding: 1em;
  border-bottom: 1px solid #747474 !important;
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
    const { id, city, country, delegate, email, info } = this.props

    const lat = parseFloat(this.props.lat)
    const lng = parseFloat(this.props.lng)

    const position = [lat, lng]

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
            <Map
              center={position}
              zoom={13}
              style={{ width: '45vh', height: '200px' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} key={`marker_${id}`}>
                <Popup>
                  <span>{'bla'}</span>
                </Popup>
              </Marker>
            </Map>
          </MiniMap>
          <Infos>
            <div>{email}</div>
            <div>{delegate}</div>
            <div>{info}</div>
            <button className="btn">Register</button>
          </Infos>
        </ContentWrapper>
      </CompetitionWrapper>
    )
  }
}
