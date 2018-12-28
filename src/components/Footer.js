import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    clear: both;
    position: relative;
    height: 40px;
    margin-top: -40px;

    background-color: --var(grey);
`

export default class Footer extends React.Component {
  render() {    
    return (
      <FooterWrapper>
        bla
      </FooterWrapper>
    )
  }
}