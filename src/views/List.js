import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import Note from '../components/Note';

export default class List extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 0, padding: 10 }}>
        <Content>
          <Note
            title="My first note"
            description="It's pretty sweet lol."
          />
        </Content>
      </Container>
    );
  }
}
