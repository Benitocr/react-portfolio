import React from 'react';


function About() {
  
  return (
    <section className='container navlist2'>
       
    
        <h1 className='navlist2 '>About Me </h1>
        <div className='navlist2'>
        <img src={require(`../../assets/benito.jpeg`)}
                alt="Benito emoji"
                className='img-thumbnail mx-1 navlist2'
                key = "emoji"
                style={{width:110, height:150}}
              
            ></img>
        </div>
        <p>Manager with experience in all aspects of operations and proven track record of consistently producing quality deliverables on time and under budget. Exceptional technology skills combined with proven ability to drive workflow strategy, manage and nurture talent, deliver improvements, and successfully implement and oversee complex projects. Outstanding strategist distinguished for proven leadership and team-building skills and excellent analytical abilities. Expert at implementing processes that improve efficiency. Demonstrated management skills that enhance productivity and drive sustained organizational performance.</p>
    </section>

  );
}

export default About;