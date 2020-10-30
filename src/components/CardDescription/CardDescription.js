import React from 'react';

const CardDescription = ({ text }) => {
  if (!text) return null;
  const description = text.replace(
    /[{][\w][}]/gi,
    icon => `<i class="ms ms-${icon.slice(1, -1).toLowerCase()}"></i>`
  );
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

export default CardDescription;
