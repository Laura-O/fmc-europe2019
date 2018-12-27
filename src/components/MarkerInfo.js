import React from 'react'
import styled from 'styled-components'

const Infocard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;

  background-color: #fff;
  border: 1px solid #1995AD;
  border-radius: 4px;

  position: absolute;
  left: -58px;
  top: -16px;
  z-index: 99999;

  text-align: center;
`

export default class MarkerInfo extends React.Component {
  render() {
    const { city, country } = this.props.marker
    return (
      <Infocard>
        <div>
          {city}, {country}
        </div>
      </Infocard>
    )
  }
}
