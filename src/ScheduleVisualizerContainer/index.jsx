import React from 'react';
import { Grid } from 'semantic-ui-react';

import ScheduleVisualizerForm from './ScheduleVisualizerForm';
import ScheduleVisualizer from './ScheduleVisualizer';
import Alert from './Alert';



const ScheduleVisualizerContainer = ({ schedule, ...props}) => (
    <Grid divided="vertically" padded="horizontally">
        <Grid.Row>
            <Grid.Column width={4}>
                <ScheduleVisualizerForm {...props} />
                {props.error &&
                    <Alert />}
            </Grid.Column>
            <Grid.Column width={4}>
                <ScheduleVisualizer schedule={schedule} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default ScheduleVisualizerContainer;
