import React from "react";

function Project(){
    return(        
        
        <section  class="cards">
            <h2 class="section-title">Portfolio</h2>
            <section class="card">
                <h3>A.C. Jewelry</h3>
                <h5>Project Leader</h5>
                <a href="https://shopacjewelry.com/" target="_blank" class="main-card-img">
                    <img src={require(`../../assets/acjewelry.jpeg`)} 
                        alt="landing page of A.C. Jewelry webpage, a woman modeling jewelry" 
                    />

                </a>
            </section>
            <section class="card">
                    <h3>AFS Forwarding</h3>
                    <h4>Project Leader</h4>
                    <a href="http://dashboard.afsforwarding.com" target="_blank" class="card-img">
                        <img src={require(`../../assets/afs.JPG`)} alt="afs forwarding" />
                    </a>
            </section>
            <section class="card">
                <h3>Casa Alondra Fine Imports</h3>
                <h4>Project Leader</h4>
                <a href="https://casaalondraimports.com/" target="_blank" class="card-img">
                    <img src={require(`../../assets/casaalondra.jpeg`)} alt="afs forwarding" />
                </a>
            </section>
            <section class="card">
                <h3>Code[Blue]</h3>
                <h5>Coding in HTML, CSS, MySql, Node, Express</h5>
                <a href="https://github.com/nickbanders/Puckwudgie-Team-B" target="_blank">Code[Blue] on GitHub</a>
                <a href="https://puckwudgie-code-blue.herokuapp.com/" target="_blank" class="main-card-img">
                    <img src={require(`../../assets/codeblue.jpg`)} 
                        alt="landing page of Code[Blue] webpage" 
                    />

                </a>
                
            </section>   
            <section class="card">
                <h3>Run Buddy</h3>
                <h5>Html, CSS</h5>
                <a href="https://github.com/Benitocr/run-buddy" target="_blank">Run Buddy on GitHub</a>
                <a href="https://benitocr.github.io/run-buddy/" target="_blank" class="card-img">
                    <img src={require(`../../assets/run.JPG`)} alt="landing page of webpage, with a blank form" />
                </a>
                
            </section>
                
        </section >
    );
};

export default Project;