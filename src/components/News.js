import React from 'react'
import styled from 'styled-components'

import ReactHtmlParser from 'react-html-parser'


const NewsWrapper = styled.div`
  max-width: 90%;
`

const Date = styled.div`
  font-weight: 500 !important;
`


const Divider = styled.div`
  border-bottom: 1px solid #bcbabe;
  background-color: #a1d6e2;
  height: 1px;
  margin: 0.5em 0px 1.5em;

  span {
    display: block;
    width: 50px;
    height: 1px;
    background-color: #1995ad;
  }
`

export default class News extends React.Component {
  render() {
    return (
      <div id="NewsSection" className="section">
        <h2>News</h2>
        <NewsWrapper>
          {this.props.newsEntries.map(el => (
            <div key={el.node.id}>
              <Date>{el.node.date}</Date>
              <div>{ReactHtmlParser(el.node.news)}</div>
            </div>
          ))}
        </NewsWrapper>
      </div>
    )
  }
}
