import React from 'react';


function Resume() {
  
  return (
    <section className='container navlist2'>
    
        <h1 className='navlist2 center-text'>Resume</h1>
        <p>Download my <a href={require("../../assets/Profile.pdf")} download>Resume</a></p>
        <dl>
            <dt>Front-End Proficiencies</dt>
            <dd>HTML</dd>
            <dd>CSS</dd>
            <dd>JavaScript</dd>
            <dd>React</dd>
            <dd>Bootstrap</dd>
            <br></br>
            <dt>Back-End Proficiencies</dt>
            <dd>APIs</dd>
            <dd>Node</dd>
            <dd>Express</dd>
            <dd>MySql Sequilize</dd>
            <dd>GraphQl</dd>
            <dd>MongoDb</dd>
        </dl>

    </section>

  );
}

export default Resume;