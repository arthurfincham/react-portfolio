import React from 'react';
import IconLinks from './IconLinks';

export default function Navbar({ section1InView, section2InView, section3InView, section4InView, section5InView }) {
  let determineTitle = () => {
    if (section1InView) {
      return (
        <>
          <a className="anchor" href="#Education">
            <h3 className="navTitle">education</h3>
          </a>
          <a className="anchor" href="#Experience">
            <h3 className="navTitle">experience</h3>
          </a>
          <a className="anchor" href="#Projects">
            <h3 className="navTitle">projects</h3>
          </a>
          <a className="anchor" href="#Pontact">
            <h3 className="navTitle">contact</h3>
          </a>
        </>
      );
    }
    if (section2InView) {
      return (
        <>
          <a className="anchor" href="#Education">
            <h3 className="navTitle-active">education</h3>
          </a>
          <a className="anchor" href="#Experience">
            <h3 className="navTitle">experience</h3>
          </a>
          <a className="anchor" href="#Projects">
            <h3 className="navTitle">projects</h3>
          </a>
          <a className="anchor" href="#Contact">
            <h3 className="navTitle">contact</h3>
          </a>
        </>
      );
    }
    if (section3InView) {
      return (
        <>
          <a className="anchor" href="#Education">
            <h3 className="navTitle">education</h3>
          </a>
          <a className="anchor" href="#Experience">
            <h3 className="navTitle-active">experience</h3>
          </a>
          <a className="anchor" href="#Projects">
            <h3 className="navTitle">projects</h3>
          </a>
          <a className="anchor" href="#Contact">
            <h3 className="navTitle">contact</h3>
          </a>
        </>
      );
    }
    if (section4InView) {
      return (
        <>
          <a className="anchor" href="#Education">
            <h3 className="navTitle">education</h3>
          </a>
          <a className="anchor" href="#Experience">
            <h3 className="navTitle">experience</h3>
          </a>
          <a className="anchor" href="#Projects">
            <h3 className="navTitle-active">projects</h3>
          </a>
          <a className="anchor" href="#Contact">
            <h3 className="navTitle">contact</h3>
          </a>
        </>
      );
    }
    if (section5InView) {
      return (
        <>
          <a className="anchor" href="#Education">
            <h3 className="navTitle">education</h3>
          </a>
          <a className="anchor" href="#Experience">
            <h3 className="navTitle">experience</h3>
          </a>
          <a className="anchor" href="#Projects">
            <h3 className="navTitle">projects</h3>
          </a>
          <a className="anchor" href="#Contact">
            <h3 className="navTitle-active">contact</h3>
          </a>
        </>
      );
    }
  };
  let sectionTitle = determineTitle;
  return (
    <nav className="navbar">
      {sectionTitle()}
      <IconLinks />
    </nav>
  );
}
