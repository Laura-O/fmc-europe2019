import React from 'react'
import styled from 'styled-components'

const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

  @media only screen and (max-width: 600px) {
    height: 5vh;
  }

  svg {
    height: 10vh;
  }

  div {
    justify-content: center;
  }
`

const Headline = styled.div`
  position: relative;
  margin:  0;
  padding: .25em 0;

  font-size: 2em;
  line-height: 1;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    padding: 0.1em 0;
  }

  &:before,
  &:after {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    content: "";
    width:  50%;
    height: .1em;
    
    background: #A1D6E2;
  }
  &:before {
    top: 0;
    animation: lineUp $duration $easing;
  }
  &:after {
    bottom: 0;
    animation: lineDown $duration $easing;
  }

  @media only screen and (max-width: 768px) {
    &:before,
    &:after {
      display: none;
    }
  }
`

export default class FAQ extends React.Component {
  render() {
    return (
      <WelcomeWrapper>
        <Headline>Welcome to FMC Europe - 23/03/2018</Headline>
      </WelcomeWrapper>
    )
  }
}
