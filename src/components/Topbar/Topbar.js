import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { useTheme } from 'contexts/ThemeContext';
import { StyledNavbar } from './styles';

const Topbar = () => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <StyledNavbar expand="lg">
      <Navbar.Brand href="#home">Random Card Viewer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Form inline>
          <Form.Check
            checked={theme === 'light'}
            onChange={handleChangeTheme}
            type="switch"
            id="custom-switch"
            label={`${theme === 'light' ? 'Light' : 'Dark'} Theme`}
          />
        </Form>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Topbar;
