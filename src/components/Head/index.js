import React from 'react';
import Nav from '../Nav';

function Head(props) {
  const {
    setContactSelected,
    contactSelected,
    setAboutSelected,
    aboutSelected,
    setProjectSelected,
    projectSelected    
  } = props;

  return (
    <section>
      
      <Nav
      setContactSelected={setContactSelected}
      contactSelected={contactSelected}
      setAboutSelected={setAboutSelected}
      aboutSeleceted={aboutSelected}
      setProjectSelected={setProjectSelected}
      projectSelected={projectSelected}
      ></Nav>
    </section>
  );
}

export default Head;