import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import geolib from 'geolib'

import Marker from './Marker'
import CompetitionPreview from './CompettionPreview'

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem 1rem 2rem 1rem;

  @media only screen and (max-width: 768px) {
    align-items: center;
    padding: 0.5rem;
    flex-direction: column;
  }
`

// const LoadingWrapper = styled.div`
//   height: 60vh;
//   width: 90vw;

//   @media only screen and (max-width: 768px) {
//     width: 90vw;
//   }
// `

const MapElement = styled.div`
  height: 60vh;
  width: 45vw;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`

class OverviewMap extends Component {
  state = {
    center: {
      lat: 50.85045,
      lng: 4.34878,
    },
    zoom: 3,
    loading: true,
    markers: this.props.markers,
    selectedLocation: {},
    hoveredLocation: {},
    located: false,
  }

  cmp

  _onChildClick = (key, childProps) => {
    this.setState({
      selectedLocation: childProps,
    })
  }

  _onChildMouseEnter = (key, childProps) => {
    this.setState({
      hoveredLocation: childProps,
    })
  }

  _onGoogleApiLoaded = () => {
    this.setState({ loading: false })
  }

  componentDidUpdate = () => {
    console.log('update')
  }

  findClosestLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        const { markers } = this.state

        let locationArray = []
        for (let i in markers) {
          let location = {
            latitude: markers[i].node.lat,
            longitude: markers[i].node.lng,
          }

          locationArray.push(location)
        }

        let sortedLocations = geolib.orderByDistance(
          { latitude: latitude, longitude: longitude },
          locationArray
        )

        let nearestCompetitionKey = sortedLocations[0].key

        this.setState({
          center: { lat: latitude, lng: longitude },
          zoom: 5,
          selectedLocation: { marker: markers[nearestCompetitionKey].node },
        })
      })
    }
  }

  render() {
    const { center, loading, markers, zoom } = this.state

    return (
      // Important! Always set the container height explicitly
      <MapWrapper style={{ position: 'relative' }}>
        {
          <MapElement>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyDfNHoNB3YBVAvDEUVe8sYVBkgpHVRuDBk',
              }}
              center={center}
              zoom={zoom}
              onChildClick={this._onChildClick}
              onChildMouseEnter={this._onChildEnter}
              onGoogleApiLoaded={console.log('loaded')}
            >
              {markers.map(({ node: marker }) => (
                <Marker
                  key={marker.id}
                  id={marker.id}
                  lat={marker.lat}
                  lng={marker.lng}
                  marker={marker}
                  isHighlighted={
                    marker.id === this.state.selectedLocation.id
                      ? 'true'
                      : 'false'
                  }
                  zIndex={1}
                />
              ))}
            </GoogleMapReact>
          </MapElement>
        }
        <CompetitionPreview
          {...this.state.selectedLocation.marker}
          findClosestLocation={this.findClosestLocation.bind(this)}
        />
      </MapWrapper>
    )
  }
}

export default OverviewMap
