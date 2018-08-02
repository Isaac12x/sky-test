import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import scheduleJson from '../../mock-service/db.json';
import ScheduleVisualizer from '../ScheduleVisualizerContainer/ScheduleVisualizer';

const schedule = scheduleJson.schedule

describe('App', () => {
  it('should render ScheduleVisualizer', () => {
    const wrapper = shallow(<ScheduleVisualizer/>);
    expect(wrapper.containsAllMatchingElements([
      <p>No schedules to be displayed</p>
    ])).to.equal(true);
  });

  it('should render table if schedule is passed', () => {
    const wrapper = shallow(<ScheduleVisualizer schedule={schedule} />);
    expect(wrapper.containsAllMatchingElements([
      <table></table>
    ])).to.equal(true);
  });

});
