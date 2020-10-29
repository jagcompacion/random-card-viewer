import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Loading from 'components/Loading';
import Cards from 'components/Cards';
import getRandomCards from 'api/getRandomCards';

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleLoadRandomCards = async () => {
    setLoading(true);
    setCards(
      await getRandomCards({
        pageSize: 3,
        random: true,
      })
    );
    setLoading(false);
  };

  return (
    <Container className="py-5" fluid>
      <div className="mb-5">
        {isLoading ? <Loading /> : <Cards cards={cards} />}
      </div>
      <div className="text-center">
        <Button onClick={handleLoadRandomCards} disabled={isLoading}>
          Show Random Card
        </Button>
      </div>
    </Container>
  );
};

export default Home;
