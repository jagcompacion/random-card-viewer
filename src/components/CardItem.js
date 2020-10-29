import React from 'react';
import ManaCost from 'components/ManaCost';
import CardDescription from 'components/CardDescription';

const CardItem = ({ card }) => (
  <div className="d-flex">
    <div>
      <img src={card.imageUrl} />
    </div>
    <div>
      <div className="d-flex">
        <div className="mr-auto">{card.name}</div>
        <div>
          <ManaCost manaCost={card.manaCost} />
        </div>
      </div>
      <div>{card.type}</div>
      <div>
        <div>
          <CardDescription text={card.text} />
        </div>
        <div>
          {card.power}/{card.toughness}
        </div>
      </div>
      <div>Illustrated by: {card.artist}</div>
    </div>
  </div>
);

export default CardItem;
