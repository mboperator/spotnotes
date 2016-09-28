import React, { Component } from 'react';
import { Container, Content, Header, Title } from 'native-base';
import List from './views/List';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>
            Spotnotes
          </Title>
        </Header>
        <Content>
          <List />
        </Content>
      </Container>
    );
  }
}
