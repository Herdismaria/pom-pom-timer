import React from 'react';

class InfoDots extends React.Component {
  render() {
    return (
      <div className="info-dots">
        <span className="dot info-dotOne jump"></span>
        <span>Not Started</span>
        <span className="dot info-dotTwo jump"></span>
        <span>In Progress</span>
        <span className="dot info-dotThree jump"></span>
        <span>Done</span>
      </div>
    )
  }
}

export default InfoDots;
