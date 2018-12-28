import React from 'react'
import styled from 'styled-components'

const ScheduleWrapper = styled.div`
  padding: 2em 1em;
  display: flex;
  flex-direction: column;  
`

const TableWrapper = styled.div`
    align-self: center;

    table {
        border: none;
        border-radius: 3px;
    }

    th {
        background-color: var(--ice);
        padding: 1em;
        font-size: 1em;
    }

    tr:hover {
        background: rgba(0,0,0,0.19);
    }

    @media only screen and (max-width: 768px) {
        th {
            padding: 0.2em;
            font-size: 0.8em;
        }
    }
`

 
export default class About extends React.Component {
  render() {
    const aboutParagraphs = this.props.aboutParagraphs;

    return (
      <ScheduleWrapper id="Schedule" className="section">
        <h2>Schedule</h2>
        <TableWrapper>
         <table>
                <thead>
                    <th>UTC</th><th>UTC+1</th><th>UTC+2</th><th>UTC+3</th><th>UTC+5</th><th>Event</th>
                </thead>
                <tbody>
		<tr>
            <td>10:30</td>
            <td>11:30</td>
            <td>12:30</td>
            <td>14:30</td>
            <td>Registration</td>
		</tr>
		<tr>
            <td>11:00</td>
            <td>12:00</td>
            <td>13:00</td>
            <td>15:00</td>
            <td>First Attempt</td>
		</tr>
		<tr>
            <td>12:00</td>
            <td>13:00</td>
            <td>14:00</td>
            <td>16:00</td>
            <td>Break</td>
		</tr>
		<tr>
            <td>12:30</td>
            <td>13:30</td>
            <td>14:30</td>
            <td>16:30</td>
            <td>Second Attempt</td>
		</tr>
		<tr>
            <td>13:30</td>
            <td>14:30</td>
            <td>15:30</td>
            <td>17:30</td>
            <td>Break</td>
		</tr>
		<tr>
            <td>14:00</td>
            <td>15:00</td>
            <td>16:00</td>
            <td>18:00</td>
            <td>Third Attempt</td>
		</tr>
		<tr>
            <td>15:45</td>
            <td>16:45</td>
            <td>17:45</td>
            <td>19:45</td>
            <td>Awards</td>
		</tr>
	</tbody>
            </table>
        </TableWrapper>
      </ScheduleWrapper>
    )
  }
}