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
import { lightTheme, darkTheme } from './components/Themes';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <button onClick={themeToggler}>THEME</button>
        <GlobalStyles />
        <div className="App">
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
