import React from 'react';

function Nav() {

  return (
    <header className="flex-row px-1">
        <nav>
            <ul className="flex-row">
            <li id = "Name" className='mx-2'>
                <a href='/'>Benito Cavazos</a>
            </li>
            <li className="mx-2">
                <a href="#about">
                About me
                </a>
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
    </header>
  );
}

export default Nav;