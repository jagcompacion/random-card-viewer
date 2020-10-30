import React from 'react';
import ManaCost from 'components/ManaCost';
import CardDescription from 'components/CardDescription';
import {
  Card,
  CardType,
  CardHeader,
  CardImage,
  CardBody,
  CardText,
  CardPower,
} from './styles';

const CardItem = ({ card }) => (
  <Card className="d-flex">
    <CardImage>
      <img
        src={card.imageUrl || 'https://via.placeholder.com/150x210'}
        alt="Card"
      />
    </CardImage>
    <CardBody className="ml-2">
      <CardHeader className="d-flex">
        <div className="mr-auto">{card.name}</div>
        <div>
          <ManaCost manaCost={card.manaCost} />
        </div>
      </CardHeader>
      <CardType>{card.type}</CardType>
      <div className="mb-2">
        <CardText className="mb-2">
          <CardDescription text={card.text} />
        </CardText>
        {card.power && card.toughness && (
          <CardPower>
            {card.power}/{card.toughness}
          </CardPower>
        )}
      </div>
      <div>Illustrated by: {card.artist}</div>
    </CardBody>
  </Card>
);

export default CardItem;
