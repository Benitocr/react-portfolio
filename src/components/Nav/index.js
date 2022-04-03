import React,{useState} from 'react';

function Nav(props) {
    const {
        setContactSelected,
        contactSelected,
        setAboutSelected,
        aboutSelected,
        setProjectSelected,
        projectSelected    
    } = props; 
  
  return (
      <nav className="flex-row navlist">
            <h1 >Benito Cavazos</h1>
            <ul className="flex-row " >   
            
                <li className="mx-2 ">
                  <span onClick={() => {
                      setAboutSelected(current => !current);
                
                  
                }}>About me</span>  
                </li>
                <li className="mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span>Contact</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
               
        </nav>            
        
   
  );
}

export default Nav;