import React from 'react';
import ReactDOM from 'react-dom';
import Visualizer from '../ScheduleVisualizerContainer/ScheduleVisualizer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Visualizer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
