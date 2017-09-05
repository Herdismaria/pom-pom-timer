import React from 'react';
import { Container, Grid, Header, Segment } from 'semantic-ui-react'

const Footer = () => (

  <div className='footer'>
    <Segment vertical>
      <Container fluid textAlign='center'>
        <Grid centered>
          <Grid.Row color='yellow'>
            <Grid.Column width={16} textAlign='center' color='yellow'>
              <Header inverted as='h3' content='Information and Copyright'/>
              <p>Powered by
                <strong> Node.js </strong>
                and
                <strong> React</strong>.</p>
              <p>You may view the
                <a className='github-link' target='_blank' rel="noopener noreferrer" style={{color: '#f53240'}} href='https://github.com/Herdismaria/react-pomodoro-timer'> Source Code </a>
                behind this project on GitHub.</p>
              <p>© 2017 Herdis Maria Sigurdardottir.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>

);

export default Footer;
