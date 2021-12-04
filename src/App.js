import React, { useState } from 'react';
import plant from './svgs/nounPlant.svg';
import AnchorLinks from './components/AnchorLinks';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import IconLinks from './components/IconLinks';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme, paleTheme, greenTheme } from './components/Themes';

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
    } else if (input === 'green') {
      return greenTheme;
    }
  };

  return (
    <>
      <ThemeProvider theme={themePicker(theme)}>
        <GlobalStyles />
        <div className="App">
          <button onClick={() => themeToggler('dark')}>DARK</button>
          <button onClick={() => themeToggler('light')}>LIGHT</button>
          <button onClick={() => themeToggler('pale')}>pale</button>
          <button onClick={() => themeToggler('green')}>green</button>
          <div className="Welcome-page">
            <IconLinks />
            <div className="Welcome-text">
              <h6>hello, i am</h6>
              <h1>arthur</h1>
            </div>
            <img src={plant} className="svg" id="App-logo" alt="logo" />
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
