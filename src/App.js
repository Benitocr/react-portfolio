
import Footer from './components/Footer';
import Head from './components/Head';
import Contact from './components/Contact'
import Project from './components/Project'
import About from './components/About'
import { useState } from 'react';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [projectSelected, setProjectSelected] =  useState(true);
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
      
      >

      </Head>
      <main>
        {projectSelected ? (
            <>
            <Project></Project>
            </>
        ):(aboutSelected ? (<About></About>):
          (contactSelected ? (<Contact></Contact>):(<></>)
          )

        )}
      </main>
     
      
      <Footer></Footer>

    </div>
  );
}

export default App;
