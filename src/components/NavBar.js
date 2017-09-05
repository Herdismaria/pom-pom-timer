import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable size='large'>
        <Menu.Item
          name='timer'
          as={Link}
          to='/'
          color='teal'
          active={activeItem === 'timer'}
          onClick={this.handleItemClick}
        >
          Timer
        </Menu.Item>

        <Menu.Item
          name='projects'
          as={Link}
          to='/projects'
          color='teal'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            color='teal'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}>
           Sign In
          </Menu.Item>

          <Menu.Item
            name='sign-up'
            color='teal'
            active={activeItem === 'sign-up'}
            onClick={this.handleItemClick}>
           Sign-up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
