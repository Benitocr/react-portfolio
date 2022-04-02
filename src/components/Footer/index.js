import React from 'react';

function Footer() {
  return (
    <div className='flex-row container navlist2'>
        <a href = "https://github.com/Benitocr" target="_blank" >
            <img src={require(`../../assets/git.jpg`)}
                alt="Git Hub Logo"
                className='img-thumbnail mx-1'
                key = "github"
                style={{width:42, height:42}}
              
            />
        </a>
        <a href = "https://www.linkedin.com/in/benito-cavazos-5786a149/" target="_blank">
            <img src={require(`../../assets/linkedin.jpg`)}
                alt="LinkedIn logo"
                className='img-thumbnail mx-1'
                key = "LinkedIn"
                style={{width:42, height:42}}
            />
        </a>
        <a href="mailto:benocr78@gmail.com">
            <img src={require(`../../assets/email.png`)}
                alt="email logo"
                className='img-thumbnail mx-1'
                key = "emaillogo"
                style={{width:42, height:42}}
            />
        </a>
    </div>

  );
}

export default Footer;