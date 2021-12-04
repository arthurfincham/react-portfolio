import React, { useState } from 'react';
import PlantIcon from './components/graphics/PlantIcon';
import AnchorLinks from './components/AnchorLinks';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import IconLinks from './components/IconLinks';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme, paleTheme } from './components/Themes';

function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = (input) => {
    setTheme(input);
  };

  const themePicker = (input) => {
    if (input === 'dark') {
      return darkTheme;
    } else if (input === 'light') {
      return lightTheme;
    } else if (input === 'pale') {
      return paleTheme;
    }
  };

  const fill = 'white';
  return (
    <>
      <ThemeProvider theme={themePicker(theme)}>
        <GlobalStyles />
        <div className="App">
          <button onClick={() => themeToggler('dark')}>DARK</button>
          <button onClick={() => themeToggler('light')}>LIGHT</button>
          <button onClick={() => themeToggler('pale')}>pale</button>
          <div className="Welcome-page">
            <IconLinks />
            <div className="Welcome-text">
              <h6>hello, i am</h6>
              <h1>arthur</h1>
            </div>
            <PlantIcon fill={fill} svgClass="svg" />
            <AnchorLinks />
          </div>
          <Education className="education-section" />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
