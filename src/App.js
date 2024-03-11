import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { LIGHT_THEME, DARK_THEME, FONT_FAMILY } from "./constant";

import { FontProvider } from "./FontContext";
import Results from "./components/Results/Results";
import Header from "./components/Header/Header";

function App() {
  // state to manage the current theme
  const [currentTheme, setCurrentTheme] = useState(LIGHT_THEME);

  // Function to toggle between themes
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <FontProvider>
        <Body>
          <Header toggleTheme={toggleTheme} />
          <Results />
        </Body>
      </FontProvider>
    </ThemeProvider>
  );
}

const Body = styled.div`
  background-color: ${(props) => props.theme.background};
  font-family: ${({ selectedFont }) => FONT_FAMILY[selectedFont]};
  min-height: 100vh;
`;

export default App;
