import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import channelOptions from 'Shared/channels';

const ScheduleVisualizerForm = (props) => (
    <Form onSubmit={props.handleFormSubmit}>
        <Form.Field>
            <label>Channel</label>
            <Dropdown
              label="channel"
              placeholder='Select a channel'
              search
              selection
              options={channelOptions}
              onChange={props.handleSelection}
            />
        </Form.Field>
        <Form.Field>
            <label>Schedule Date</label>
            <DatePicker
                label="date"
                dateFormat="DD/MM/YYYY"
                selected={props.selectedDate}
                onChange={props.handleDateChange}
                customInput= {
                    <InputMask mask="99/99/9999"/>
                }
            />
        </Form.Field>
        <Button type='submit'>View Schedule</Button>
    </Form>
);

ScheduleVisualizerForm.propTypes = {
  handleSelection: PropTypes.func,
  selectedDate: PropTypes.func,
  handleDateChange: PropTypes.func
}

export default ScheduleVisualizerForm;
