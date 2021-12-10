import React, { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import IconLinks from './components/IconLinks';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme, paleTheme } from './components/Themes';
import JumpTo from './components/JumpTo';

function App() {
  const [theme, setTheme] = useState('pale');
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
          <JumpTo />
          <div className="Welcome-page">
            <div className="Welcome-text">
              <IconLinks />
              <h1>arthur fincham</h1>
              <h4>i am a full-stack developer with an eye for design. Makers Academy grad. currently enjoying Ruby on Rails and React.</h4>
            </div>
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
