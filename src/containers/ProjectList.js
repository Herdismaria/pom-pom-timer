import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {
  Card,
  Grid,
  Icon,
  Form,
  Input,
  Transition
} from 'semantic-ui-react';

import {fetch_projects, add_project, watchProjectAddedEvent} from '../actions/projects_actions';

import ProjectListItem from '../components/ProjectListItem';
import Loader from '../components/Loader';
import InfoDots from '../components/InfoDots';

class ProjectList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      projectName: '',
      showForm: false,
      visible: true
    }
    this.onChange = this.onChange.bind(this);
    this.handleAddProject = this.handleAddProject.bind(this);
  }

  componentDidMount() {
    this.props.fetch_projects();
  }

  onChange(e) {
    this.setState({projectName: e.target.value});
  }

  handleAddProject(e) {
    e.preventDefault();

    const old = this.state.visible;
    if (this.state.projectName === '') {
      this.setState({
        visible: !old
      })
      return;
    }

    this.props.add_project(this.state.projectName);
    this.setState({projectName: '', showForm: false});
  }
  render() {
    // If still fetching projects show loader

      var form = <Form onSubmit={this.handleAddProject}>
        <Transition visible={this.state.visible} animation='shake' duration={1000}>
        <Input ref='name' icon={<Icon
          name='add'
          circular
          link
          color='orange'
          inverted
          onClick={this.handleAddProject}/>}
        onChange={this.onChange} placeholder='add name' value={this.state.projectName}/></Transition></Form>;

      var icon = <div className='content-padding'><Icon name='add' size='large'/>
        New Project</div>;

    var content;
    if (this.props.projects.isFetching) {
      content = <Loader/>
    } else {
      content = <div>
        <Grid container stackable centered columns={2}>
          {_.map(this.props.projects.projects, (project) => {
            return <ProjectListItem {...project} key={project.id}/>
          })}
          <Grid.Column mobile={14} tablet={7} computer={6}>
            <Card className='add-project-button' fluid onClick={(e) => {this.setState({showForm: true});}}>
              <Card.Content>
                <Card.Header>{this.state.showForm ? form : icon}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Grid.Row>
          <InfoDots />
        </Grid.Row>
      </div>
    }
    return (
      <div className='project-list'>
        {content}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {projects: state.projects};
}

function mapDispatchToProps(dispatch) {
  watchProjectAddedEvent(dispatch);
  return bindActionCreators({
    fetch_projects: fetch_projects,
    add_project: add_project
  }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProjectList);
