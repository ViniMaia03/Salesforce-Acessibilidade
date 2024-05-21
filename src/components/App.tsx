'use client'

import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/theme";
import GlobalTheme from "@/globals";
import styled from "styled-components";
 
const ToggleButton = styled.button`
  background-color: ${props => props.theme.toggleBorder};
  color: #172554;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;
 
function App() {
  const [theme, setTheme] = useState(lightTheme);
 
  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };
 
  return (
    <ThemeProvider theme={theme}>
        <GlobalTheme />
        <ToggleButton onClick={toggleTheme}> Alterar Tema </ToggleButton>
    </ThemeProvider>
  );
}
 
export default App;