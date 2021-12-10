import React from 'react';
import IconLinks from './IconLinks';

export default function Navbar({ section1InView, section2InView, section3InView, section4InView, section5InView }) {
  let determineTitle = () => {
    if (section1InView) {
      return 'Hello';
    }
    if (section2InView) {
      return 'Education';
    }
    if (section3InView) {
      return 'Experience';
    }
    if (section4InView) {
      return 'Projects';
    }
    if (section5InView) {
      return 'Contact';
    }
  };
  let sectionTitle = determineTitle;
  return (
    <nav className="navbar">
      <h1 className="navTitle">{sectionTitle()}</h1>
      <IconLinks />
    </nav>
  );
}

//  <nav
//    className="NavBar"
//    style={{
//      backgroundColor: section1InView ? 'red' : section2InView ? 'blue' : 'green',
//    }}
//  />;
