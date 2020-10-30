import React, { useState } from 'react';
import { shape, oneOfType, arrayOf } from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'constants/theme';

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: oneOfType([shape({}).isRequired, arrayOf(shape({})).isRequired]),
};

ThemeProvider.defaultProps = {
  children: {},
};

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeContext;
