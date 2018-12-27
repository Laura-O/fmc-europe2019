import React from 'react'
import styled from 'styled-components'

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

  height: 60vh;

  .select {
    text-align: center;
  }
`

const PreviewElement = styled.div`
  align-content: center;
  width: 45vh;

  padding: 1rem;
`

const ButtonWrapper = styled.div`
  height: 10rem;
`

export default class CompetitionPreview extends React.Component {
  render() {
    const {
      city,
      country,
      delegate,
      email,
      fee,
      info,
      findClosestLocation,
    } = this.props

    const SelectElement = (
      <div className="select">
        <div>Select a location to see details</div>
      </div>
    )

    const CompetitionElement = (
      <div>
        <h2>{city + ', ' + country}</h2>
        <div>
          <div className="lineHeading">Delegate:</div> {delegate}
        </div>
        <div>
          <div className="lineHeading">Fee:</div>
          {fee}
        </div>
        <div>
          <div className="lineHeading">Info:</div>
          {info}
        </div>
      </div>
    )

    return (
      <PreviewWrapper>
        <PreviewElement>
          {city ? CompetitionElement : SelectElement}
        </PreviewElement>

        <ButtonWrapper>
          <button className="btn" onClick={findClosestLocation}>
            Find the nearest location
          </button>
        </ButtonWrapper>
      </PreviewWrapper>
    )
  }
}
