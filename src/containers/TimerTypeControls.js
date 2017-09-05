import React from 'react';
import {Button} from 'semantic-ui-react';
import { connect } from "react-redux";
import { setTypeTimer, setTypeCountdown, setTypeLong, setTypeShort, reset } from '../actions/timer_actions';

class TimerTypeControls extends React.Component {
  setTimer(interval) {
    this.props.setTypeTimer();
    this.props.reset(interval);
  }
  setCountdown(interval) {
    this.props.setTypeCountdown();
    this.props.reset(interval);
  }
  setLong(interval) {
    this.props.setTypeLong();
    this.props.reset(interval);
  }
  setShort(interval) {
    this.props.reset(interval);
    this.props.setTypeShort();
  }
  render() {
    const interval = this.props.timer.interval;
    return (
      <div className='timer-type-controls'>
        <Button color='yellow'
          onClick={this.setTimer.bind(this, interval)}>Timer
        </Button>
        <Button color='yellow'
          onClick={this.setCountdown.bind(this, interval)}>Countdown
        </Button>
        <Button color='yellow'
          onClick={this.setLong.bind(this, interval)}>Long Break
        </Button>
        <Button color='yellow'
          onClick={this.setShort.bind(this, interval)}>Short Break
        </Button>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {timer : state.timer};
}

export default connect(
  mapStatetoProps,
  {setTypeTimer, setTypeCountdown, setTypeLong, setTypeShort, reset})(TimerTypeControls);
