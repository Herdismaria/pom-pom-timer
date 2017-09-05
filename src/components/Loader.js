import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className="loading-spinner">
        <div className="dot dotOne"></div>
        <div className="dot dotTwo"></div>
        <div className="dot dotThree"></div>
      </div>
    )
  }
}

export default Loader;
