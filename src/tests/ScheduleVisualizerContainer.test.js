import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ScheduleVisualizerContainer from '../ScheduleVisualizerContainer';
import ScheduleVisualizerForm from '../ScheduleVisualizerContainer/ScheduleVisualizerForm';
import ScheduleVisualizer from '../ScheduleVisualizerContainer/ScheduleVisualizer';


describe('Rendering ScheduleVisualizerContainer', () => {
  it('should render ScheduleVisualizerContainer', () => {
    const wrapper = shallow(<ScheduleVisualizerContainer error={false} />);
    expect(wrapper.containsAllMatchingElements([
      <ScheduleVisualizerForm />,
      <ScheduleVisualizer />
    ])).to.equal(true);
  });
});
