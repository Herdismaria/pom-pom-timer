import React from 'react';
import {connect} from "react-redux";
import {Grid, Segment, Divider} from 'semantic-ui-react';

import Timer from './Timer';

class Project extends React.Component {
  render() {

    return (
      <div className='timer-controls'>
        <Grid columns={2} divided stackable>
          <Grid.Row stretched>
            <Grid.Column mobile={14} tablet={14} computer={7}>
            </Grid.Column>
            <Grid.Column mobile={14} tablet={14} computer={7}>
              <Timer/>
              <Divider horizontal hidden></Divider>
              <Divider horizontal>Events</Divider>
              <Segment>2</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Project;
