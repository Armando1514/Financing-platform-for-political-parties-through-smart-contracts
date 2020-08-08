import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';

export default (props) => {
  return (
    <div>
    <Container>
      <Header />
      <h1> I am a header</h1>
      {props.children}
    </Container>
    </div>
  );
};
