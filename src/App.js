
import Footer from './components/Footer';
import Head from './components/Head';
import Contact from './components/Contact'
import Project from './components/Project'
import About from './components/About'
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [projectSelected, setProjectSelected] =  useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  console.log("valor de ProjectSelected ",projectSelected);
  console.log("valor de aboutSelected ", aboutSelected);
  console.log("Valor de contactSelected ", contactSelected);

  return (
    <div>
      <Head
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      projectSelected={projectSelected}
      setProjectSelected= {setProjectSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      
      >

      </Head>
      <main>
        {projectSelected ? 
          (<Project></Project>):(aboutSelected ? (<About></About>):
              (contactSelected ? (<Contact></Contact>):
                (resumeSelected ?(<Resume></Resume>):(
                  projectSelected ?(<Project></Project>):(<></>)
                  )
                )
              )
          )
        }
      </main>
     
      
      <Footer></Footer>

    </div>
  );
}

export default App;
