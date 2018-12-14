import React from 'react'
import styled from 'styled-components'

import MarkerInfo from './MarkerInfo'

const StickerWrapper = styled.div`
  background: #ffffff;
  float: left;

  padding: 3px;
  position: relative;
  overflow: hidden;

  top: -9px;
  left: -9px;

  border-radius: 15px;
  -webkit-border-radius: 15px;
`

const Sticker = styled.div`
  width: 18px;
  height: 18px;
  float: left;

  border-radius: 9px;
  -webkit-border-radius: 9px;

  background: #14a76c;
`

export default class Marker extends React.Component {
  render() {
    const { $hover, marker } = this.props

    // isHighlighted zIndex

    const clearHoverStyle = { transform: 'none', zIndex: 1 }

    const hoverStyle = {
      transform: 'scale(1.2)',
      transition: '200ms ease-out',
      zIndex: 9,
    }

    const style = $hover ? hoverStyle : clearHoverStyle

    return (
      <div>
        <StickerWrapper style={{ ...style }}>
          <Sticker />
        </StickerWrapper>
        {$hover && <MarkerInfo marker={marker} />}
      </div>
    )
  }
}
