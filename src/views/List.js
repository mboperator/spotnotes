import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';

export default class List extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 0, padding: 10 }}>
        <Content>
          <Card style={{ marginTop: 10 }}>
            <CardItem header note="created at date">
              <Text>First Note</Text>
            </CardItem>
            <CardItem>
              <Text>A description of the note</Text>
            </CardItem>
          </Card>

          <Card style={{ marginTop: 10 }}>
            <CardItem header note="created at date">
              <Text>Second Note</Text>
            </CardItem>
            <CardItem>
              <Text>A description of the note</Text>
            </CardItem>
          </Card>

          <Card style={{ marginTop: 10 }}>
            <CardItem header note="created at date">
              <Text>Third Note</Text>
            </CardItem>
            <CardItem>
              <Text>A description of the note</Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}
