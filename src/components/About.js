import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  height: 500px;
`

export default class About extends React.Component {
  render() {
    const aboutParagraphs = this.props.aboutParagraphs;

    return (
      <AboutWrapper id="AboutSection" className="section">
        <h2>About</h2>
        <div>
          {aboutParagraphs.map(el => 
            (<div key={el.node.id}>{el.node.paragraph}</div>)
          )}
        </div>
      </AboutWrapper>
    )
  }
}