import React, { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import { LIGHT_THEME, DARK_THEME  } from './constant';


import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Results from './components/Results/Results';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? LIGHT_THEME : DARK_THEME} toggleTheme={toggleTheme}>
      <div>
        <ThemeSwitcher />
        <Results />
      </div>
    </ThemeProvider>
  );
}

export default App;