import React from 'react'
import styled from 'styled-components'

const ScheduleWrapper = styled.div`
  padding: 2em 1em;
`

export default class About extends React.Component {
  render() {
    const aboutParagraphs = this.props.aboutParagraphs;

    return (
      <ScheduleWrapper id="ScheduleSection" className="section">
        <h2>Schedule</h2>
        <div>
         bla
        </div>
      </ScheduleWrapper>
    )
  }
}