import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import ScheduleVisualizerForm from '../ScheduleVisualizerContainer/ScheduleVisualizerForm';

const handled = jest.fn()
const selected = jest.fn()
const changed = jest.fn()


describe('Rendering ScheduleVisualizerContainer', () => {
  it('should render ScheduleVisualizerContainer', () => {
    const wrapper = mount(<ScheduleVisualizerForm />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for handleSelection, selectedDate and handleDateChange', function () {
    const wrapper = shallow(<ScheduleVisualizerForm
                              handleSelection={handled}
                              selectedDate={selected}
                              handleDateChange={changed}
                            />);
    expect(wrapper.props().handleSelection).to.be.defined;
    expect(wrapper.props().selectedDate).to.be.defined;
    expect(wrapper.props().handleDateChange).to.be.defined;
  });
});
