import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  height: 500px;
`

export default class About extends React.Component {
  render() {
    return (
      <AboutWrapper id="AboutSection" className="section">
        <h2>About</h2>
        <div />
      </AboutWrapper>
    )
  }
}
