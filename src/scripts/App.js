import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import CardScreen from './screen/CardScreen';

class App extends Component {
  render() {
    return (
      <div>
        <Container>   
            <CardScreen />     
        </Container>
      </div>
    );
  }
}

export default App;

