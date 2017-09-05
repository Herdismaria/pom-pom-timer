import React from 'react';
import {Container, Grid} from 'semantic-ui-react'
import { connect } from "react-redux";

import Clock from '../components/Clock';
import TimerTypeControls from '../containers/TimerTypeControls';
import TimerControls from '../containers/TimerControls';

class Timer extends React.Component {
  render() {
    return (
      <div className='timer'>
        <Container>
          <Grid centered verticalAlign='middle'>
            <Grid.Row >
              <Grid.Column mobile={16} tablet={10} computer={8}>
                <TimerTypeControls />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column mobile={16} tablet={10} computer={8}>
              <Clock seconds={this.props.timer.seconds} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column mobile={16} tablet={10} computer={8}>
              <TimerControls timerStatus='stopped'/>
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {timer : state.timer};
}

export default connect(
  mapStatetoProps)(Timer);
