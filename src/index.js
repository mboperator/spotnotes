import React, { Component } from 'react';
import { Container, Content, Header, Title } from 'native-base';
import List from './views/List';
import Map from './views/Map';

export default class AppContainer extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>
            Spotnotes
          </Title>
        </Header>
        <Content>
          <Map />
        </Content>
      </Container>
    );
  }
}
