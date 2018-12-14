import React from 'react'
import styled from 'styled-components'

const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

  svg {
    height: 10vh;
  }

  div {
    justify-content: center;
  }
`

export default class FAQ extends React.Component {
  render() {
    return (
      <WelcomeWrapper>
        <div>FMC Europe 2018</div>
      </WelcomeWrapper>
    )
  }
}
