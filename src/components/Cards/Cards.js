import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from 'components/CardItem';
import { CardsContainer } from './styles';

const Cards = ({ cards }) => (
  <CardsContainer>
    <Row>
      {cards.map(item => (
        <Col md="4" key={item.id}>
          <CardItem card={item} />
        </Col>
      ))}
    </Row>
  </CardsContainer>
);

export default Cards;
