import React from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from "react-redux";
import {start, pause, reset} from '../actions/timer_actions';

class TimerControls extends React.Component {
  render() {
    const interval = this.props.timer.interval;
    const type = this.props.timer.type;

    var renderStartStopButton = () => {
      if (this.props.timer.status === 'started') {
        return <Button circular icon='pause' size='huge' color='yellow' onClick={() => this.props.pause(interval)}></Button>
      } else {
        return <Button circular icon='play' size='huge' color='green' onClick={() => this.props.start(type)}></Button>
      }
    };

    return (
      <div className='timer-controls'>
        {renderStartStopButton()}
        <Button circular icon='stop' size='huge' color='red' onClick={() => this.props.reset(interval)}/>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {timer: state.timer};
}

export default connect(mapStatetoProps, {start, pause, reset})(TimerControls);
