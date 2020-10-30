import React from 'react';
import { Spinner } from 'react-bootstrap';
import { LoadingContainer } from './styles';

const Loading = () => (
  <LoadingContainer className="text-center d-flex justify-content-center align-items-center">
    <Spinner animation="border" role="loading">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </LoadingContainer>
);

export default Loading;
