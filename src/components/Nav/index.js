import React from 'react';

function Nav(props) {
    const {
        setContactSelected,
        contactSelected,
        setAboutSelected,
        aboutSelected,
        setProjectSelected,
        projectSelected    
    } = props; 
    const AboutMe = ()=>{
        setAboutSelected(true);
        setContactSelected(false);
        setProjectSelected(false);
    };
    const ContactMe = ()=>{
        setAboutSelected(false);
        setContactSelected(true);
        setProjectSelected(false);
    };
  return (
      <nav className="flex-row navlist">
            <h1 >Benito Cavazos</h1>
            <ul className="flex-row " >   
            
                <li className="mx-2 ">
                  <span onClick={() => AboutMe()}>About me</span>  
                </li>
                <li className="mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span onClick={() => ContactMe()}>Contact</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
               
        </nav>            
        
   
  );
}

export default Nav;