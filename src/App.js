import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <header>
        <Header></Header>
        <Nav></Nav>
      </header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>

  );
}

export default App;
