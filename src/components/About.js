import React from "react";
import "../scss/About.scss";
import HamburgerMenuPage from "./HamburgerMenu";

const About = () => {
  return (
    <>
      <div className="main-about-container">
        <HamburgerMenuPage />
        <div className="content">
          <h1>Section contact in progress</h1>
          <div className="work-progress"></div>
        </div>
      </div>
    </>
  );
};

export default About;
