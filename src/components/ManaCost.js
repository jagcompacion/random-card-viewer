import React from 'react';
import { Spinner } from 'react-bootstrap';

const ManaCost = ({ manaCost }) => {
  if (!manaCost) return null;
  const iconList = manaCost
    .match(/[{][\w][}]/gi)
    .map(mana => mana.slice(1, -1).toLowerCase());
  return (
    <div className="d-flex">
      {iconList.map(icon => (
        <i className={`ms ms-${icon}`} />
      ))}
    </div>
  );
};

export default ManaCost;
