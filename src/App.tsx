import React from 'react';
import Home from './Sections/Home';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Qualification from './Sections/Qualification';
import Recommendations from './Sections/Recommendations';
import Header from './Sections/Header';

function App() {

  return (
    <div className="m-auto min-h-screen text-letter bg-mono" id="wrapper">
      <Header />

      {/* ======================= MAIN ==================== */}
      <main className='block lg:max-w-[968px] m-auto'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Recommendations />
        
        <section id="portfolio" className="pt-8 pb-16 portfolio"></section>
        <section id="project" className="pt-8 pb-16 project"></section>
      </main>
    </div>
  );
}

export default App;
