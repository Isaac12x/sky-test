import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../App';
import ScheduleVisualizerContainer from '../ScheduleVisualizerContainer';

describe('App', () => {
  it('should render ScheduleVisualizer', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.containsAllMatchingElements([
      <ScheduleVisualizerContainer error={false} />
    ])).to.equal(true);
  });
});
