import React from 'react'
import styled from 'styled-components'

const MiniSticker = styled.div`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  background: #14a76c;
`

export default class Countdown extends React.Component {
  render() {
    return <MiniSticker />
  }
}
