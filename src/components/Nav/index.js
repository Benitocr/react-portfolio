import React from 'react';

function Nav() {

  return (
      <nav className="flex-row navlist">
            <h1 className="flex-row">Benito Cavazos</h1>
            <ul className="flex-row " >   
                <li className="mx-2 ">
                  About me  
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