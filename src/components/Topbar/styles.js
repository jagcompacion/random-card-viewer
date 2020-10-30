import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledNavbar = styled(Navbar)`
  background: ${({ theme }) => theme.toggleBorder};
  .navbar-brand {
    color: ${({ theme }) => theme.text} !important;
  }
`;
