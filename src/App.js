import React, { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme, paleTheme } from './components/Themes';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';

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

  const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.1 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.1 });
  const [section5Ref, section5InView] = useInView({ threshold: 0.1 });

  const fill = 'white';
  return (
    <>
      <ThemeProvider theme={themePicker(theme)}>
        <GlobalStyles />

        <div className="App">
          <Navbar
            section1InView={section1InView}
            section2InView={section2InView}
            section3InView={section3InView}
            section4InView={section4InView}
            section5InView={section5InView}
          />
          <div className="Welcome-page" ref={section1Ref}>
            <div className="Welcome-text">
              <h1>arthur fincham</h1>
              <h4>i am a full-stack developer with an eye for design. Makers Academy grad. currently enjoying Ruby on Rails and React.</h4>
            </div>
          </div>
          <Education className="education-section" section2Ref={section2Ref} />
          <Experience section3Ref={section3Ref} />
          <Projects section4Ref={section4Ref} />
          <Contact section5Ref={section5Ref} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
