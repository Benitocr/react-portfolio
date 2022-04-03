import React from 'react';

function Nav(props) {
    const {
        setContactSelected,
        contactSelected,
        setAboutSelected,
        aboutSelected,
        setProjectSelected,
        projectSelected,
        setResumeSelected,
        resumeSelected   
    } = props; 
    console.log('valor aboutSelected en Nav', aboutSelected  );
    const AboutMe = ()=>{
        setAboutSelected(true);
        setContactSelected(false);
        setProjectSelected(false);
        setResumeSelected(false);
    };
    const ContactMe = ()=>{
        setAboutSelected(false);
        setContactSelected(true);
        setProjectSelected(false);
        setResumeSelected(false);
    };
    const Resume = ()=>{
        setAboutSelected(false);
        setContactSelected(false);
        setProjectSelected(false);
        setResumeSelected(true);
    }
    const Project = ()=>{
        setAboutSelected(false);
        setContactSelected(false);
        setProjectSelected(true);
        setResumeSelected(false);
    }
  return (
      <nav className="flex-row navlist">
            <h1 >Benito Cavazos</h1>
            <ul className="flex-row " >   
            
                <li className={`mx-2 ${aboutSelected && 'navActive'} `}>
                  <span onClick={() => AboutMe()}>About me</span>  
                </li>
                <li className={`mx-2 ${projectSelected && 'navActive'} `}>
                    <span onClick={() => Project()}>Portfolio</span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'} `}>
                    <span onClick={() => ContactMe()}>Contact</span>
                </li>
                <li className={`mx-2 ${resumeSelected && 'navActive'} `}>
                    <span onClick={() => Resume()}>Resume</span>
                </li>
            </ul>
               
        </nav>            
        
   
  );
}

export default Nav;