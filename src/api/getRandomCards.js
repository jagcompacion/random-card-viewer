import axios from 'axios';
import { apiUrl } from 'constants/api';

const getRandomCard = async params => {
  const { data } = await axios.get(`${apiUrl}/cards`, {
    params,
  });
  return data.cards;
};

export default getRandomCard;
