import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from 'components/CardItem';

const Cards = ({ cards }) => (
  <Row>
    {cards.map(item => (
      <Col md="4" key={item.id}>
        <CardItem card={item} />
      </Col>
    ))}
  </Row>
);

export default Cards;
