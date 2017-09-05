import React from 'react';
import { Card, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ProjectListItem extends React.Component {
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
    var getColor = () => {
      var status = this.props.status;
      if (status === 'not-started') {
        return 'red';
      } else if (status === 'in-progress') {
        return 'yellow';
      } else if (status === 'done') {
        return 'green';
      }
    }
    return (
      <Grid.Column mobile={14} tablet={7} computer={6}>
        <Card fluid as={Link} to={`/projects/${this.props.id}`} color={getColor()}>
          <Card.Content>
            <Card.Header>
              {this.props.name}
            </Card.Header>
            <Card.Meta>
              {moment.unix(this.props.created).format("D.MMMM YYYY - HH:mm:ss")}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Icon name='clock' />
            {this.formatSeconds(this.props.totalSeconds)}
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default ProjectListItem;
