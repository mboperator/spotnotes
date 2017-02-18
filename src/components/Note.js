import React, { PropTypes } from 'react';
import { Card, CardItem, Text } from 'native-base';

const Note = ({ title, description }) => (
  <Card style={{ marginTop: 10 }}>
    <CardItem header>
      <Text>{title}</Text>
    </CardItem>
    <CardItem>
      <Text>{description}</Text>
    </CardItem>
  </Card>
);

Note.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Note;
