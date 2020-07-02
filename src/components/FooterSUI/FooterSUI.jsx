import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './FooterSUI.css'


const SegmentExampleInverted = () => (
  <>
  <Segment id="FooterSegmentSUI" inverted>
    <Grid columns='equal' divided inverted padded>
      <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
          <Segment color='black' inverted>
            <Link to="/"><button className="ui inverted violet basic button">All-news</button></Link>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            <Link to="/Nasa-news"><button className="ui inverted violet basic button">Nasa-news</button></Link>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            <Link to="/Contact"><button className="ui inverted violet basic button">Contact</button></Link>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <p className="copyright"> &copy; Copyright 2020 Inferysp</p>
    </Grid>
  </Segment>
  </>
);

export default SegmentExampleInverted;