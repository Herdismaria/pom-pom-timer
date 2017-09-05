import React from 'react';

class Clock extends React.Component {
  formatSeconds(totalSeconds) {
    var hours = Math.floor(totalSeconds / 3600);
    var secondsLeft = totalSeconds - (hours * 3600);
    var minutes = Math.floor(secondsLeft / 60);
    var seconds = secondsLeft - (minutes * 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  render() {
    const time = this.formatSeconds(this.props.seconds);
    return (
      <div className='clock-container'>
        <h1>{time}</h1>
      </div>
    );
  }
}

export default Clock;
