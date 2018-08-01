import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react';

const ScheduleVisualizer = (props) => {
    if (props.schedule && props.schedule.length !== 0) {
      const schedule = props.schedule.map((prog, index) => {
        return (
          <Table.Row key={index}>
            <Table.Cell>{prog.startTime}</Table.Cell>
            <Table.Cell>{prog.endTime}</Table.Cell>
            <Table.Cell>{prog.titleName}</Table.Cell>
          </Table.Row>
        )
      })

      return (
        <Table basic="very" celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Start time</Table.HeaderCell>
              <Table.HeaderCell>End time</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {schedule}
          </Table.Body>
        </Table>
      )
    }

    return (<div>No schedules to be displayed</div>)
}

ScheduleVisualizer.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.object)
}

export default ScheduleVisualizer;
