import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  padding: 2em 1em;
`

export default class About extends React.Component {
  render() {
    const aboutParagraphs = this.props.aboutParagraphs;

    return (
      <AboutWrapper id="AboutSection" className="section">
        <h2>About</h2>
        <div>
          <div>
            FMC Europe 2019 is a multi-location Fewest Moves competition.
            It will take place on 23rd March 2019.
          </div>
          <div>
            <h4 id="RegisterSection">How to register</h4>
            <ol>
              <li>Select a location where you want to compete</li>
              <li>Visit the competition page on the 
                <a href="https://www.worldcubeassociation.org/competitions/FMCEurope2019/"> WCA Website</a>
              </li>
              <li>Fill out the registration form and enter the city in the comment field.
                Please do not write anything else in this field.</li>
            </ol>
          </div>
        </div>
      </AboutWrapper>
    )
  }
}