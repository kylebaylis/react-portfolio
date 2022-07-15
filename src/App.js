import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div className='body'>
      <header className="flex-row">
        <Header></Header>
        <Nav
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Nav>
      </header>
      <main>
        {!portfolioSelected && !contactSelected && !resumeSelected ? (
          <About></About>
        ) : portfolioSelected && !contactSelected && !resumeSelected ? (
          <Portfolio></Portfolio>
        ) : contactSelected && !resumeSelected && !resumeSelected ? (
          <Contact></Contact>
        ) : <Resume></Resume>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>

  );
}

export default App;
