import React from 'react'
import styled from 'styled-components'

const FAQWrapper = styled.div`
  height: 500px;
`

export default class FAQ extends React.Component {
  render() {
    return (
      <FAQWrapper id="FAQSection" className="section">
        <h2>Frequently Asked Questions</h2>
        <div />
      </FAQWrapper>
    )
  }
}
