import React, { createContext } from 'react';

const theme = 'light';
export const ThemeContext = createContext(theme);

export default ({ children }) => {
  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
