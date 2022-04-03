import React from 'react';
import Nav from '../Nav';

function Head(props) {
  const {
    setContactSelected,
    contactSelected,
    setAboutSelected,
    aboutSelected,
    setProjectSelected,
    projectSelected,
    resumeSelected, 
    setResumeSelected   
  } = props;

  return (
    <section>
      
      <Nav
      setContactSelected={setContactSelected}
      contactSelected={contactSelected}
      setAboutSelected={setAboutSelected}
      aboutSelected={aboutSelected}
      setProjectSelected={setProjectSelected}
      projectSelected={projectSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      ></Nav>
    </section>
  );
}

export default Head;