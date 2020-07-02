import React from 'react'
import { Card, Icon } from 'semantic-ui-react';

const SemanticNewsCard = (props) => (
  <Card
    image={props.urlToImage}
    header={props.title}
    description={props.description}
    extra={
      <a href={props.url} rel="noopener noreferrer" target="_blank">
        Zobacz więcej!<Icon name='user' />
        źródło: {props.sourceName}
      </a>}
  />
);

export default SemanticNewsCard