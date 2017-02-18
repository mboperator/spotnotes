import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import Note from '../components/Note';

export default class Map extends Component {
  static defaultProps = {
    notes: [
      { title: 'Note 1', description: 'The first note.' },
      { title: 'Note 2', description: 'The second note.' },
      { title: 'Note 3', description: 'The third note.' },
      { title: 'Note 4', description: 'The fourth note.' },
    ],
  };

  render() {
    const { notes } = this.props;
    return (
      <Container style={{ paddingTop: 0, padding: 10 }}>
        <Content>
          {notes.map(note => (
            <Note
              key={note.title}
              title={note.title}
              description={note.description}
            />
          ))}
        </Content>
      </Container>
    );
  }
}
