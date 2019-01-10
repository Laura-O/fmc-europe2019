import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import _ from 'lodash'

import styled from 'styled-components'
import { Table } from 'semantic-ui-react'

const TableWrapper = styled.div`
  padding: 1em;
`


export default class Competitors extends React.Component {
  state = {
    column: null,
    data: this.props.competitors,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, clickedColumn),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <TableWrapper>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'node.name' ? direction : null}
                onClick={this.handleSort('node.name')}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'node.comments' ? direction : null}
                onClick={this.handleSort('node.comments')}
              >
                Location
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'node.single' ? direction : null}
                onClick={this.handleSort('node.single')}
              >
                Best Single
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'node.average' ? direction : null}
                onClick={this.handleSort('node.average')}
              >
                Best Mean
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              data.map(competitor => (
                <Table.Row key={competitor.node.id}>
                  <Table.Cell>{competitor.node.name}</Table.Cell>
                  <Table.Cell>{competitor.node.comments}</Table.Cell>
                  <Table.Cell>{competitor.node.single === 999 ? "na" : competitor.node.single }</Table.Cell>
                  <Table.Cell>{competitor.node.average === 999 ? "na" : competitor.node.average }</Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </TableWrapper>
    )
  }
}
