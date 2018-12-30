import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link';

const ScheduleWrapper = styled.div`
  padding: 2em 1em;
  display: flex;
  flex-direction: column;

  .important {
    font-weight: 500;
    padding-top: 2em;
  }
`

const TableWrapper = styled.div`
    align-self: center;

    table {
        border: none;
        border-radius: 3px;
        padding-top: 1em;
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

        td {
            font-size: 0.7em;
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
                    <tr>
                        <th className="tooltip fade" data-title="United Kingdom">UTC</th>
                        <th className="tooltip fade" data-title="Denmark France Germany Italy Netherlands Norway Poland Sweden">
                            UTC+1
                        </th>
                        <th className="tooltip fade" data-title="Estonia Finland Romania Ukraine">UTC+2</th>
                        <th>UTC+3</th>
                        <th className="tooltip fade" data-title="Russia (Chelyabinsk)">UTC+5</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>9:30</td>
                <td>10:30</td>
                <td>11:30</td>
                <td>12:30</td>
                <td>14:30</td>
                <td>Registration</td>
                </tr>
                <tr>
                <td>10:00</td>
                <td>11:00</td>
                <td>12:00</td>
                <td>13:00</td>
                <td>15:00</td>
                <td>First Attempt</td>
                </tr>
                <tr>
                <td>11:00</td>
                <td>12:00</td>
                <td>13:00</td>
                <td>14:00</td>
                <td>16:00</td>
                <td>Break</td>
                </tr>
                <tr>
                <td>12:00</td>
                <td>13:00</td>
                <td>14:00</td>
                <td>15:00</td>
                <td>17:00</td>
                <td>Second Attempt</td>
                </tr>
                <tr>
                <td>13:00</td>
                <td>14:00</td>
                <td>15:00</td>
                <td>16:00</td>
                <td>18:00</td>
                <td>Break</td>
                </tr>
                <tr>
                <td>14:00</td>
                <td>15:00</td>
                <td>16:00</td>
                <td>17:00</td>
                <td>19:00</td>
                <td>Third Attempt</td>
                </tr>
                <tr>
                <td>15:45</td>
                <td>16:45</td>
                <td>17:45</td>
                <td>18:45</td>
                <td>20:45</td>
                <td>Awards</td>
                </tr>
                </tbody>
            </table>
        </TableWrapper>
        <div className="important">Important: Please pay attention to the time zone of your location!</div>
        <div>You can find this information on the <Link to="/locations">locations page</Link>.</div>
      </ScheduleWrapper>
    )
  }
}