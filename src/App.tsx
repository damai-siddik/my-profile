import React from 'react';
import Header from './Sections/Header';
import Home from './Sections/Home';
import About from './Sections/About';
import Qualification from './Sections/Qualification';
import Feature from './Sections/Feature';
import Skills from './Sections/Skills';
import Recommendations from './Sections/Recommendations';
import Footer from './Sections/Footer';
import Journey from './Sections/Journey';

function App() {

  return (
    <div className="m-auto min-h-screen text-letter bg-mono dark" id="wrapper">
      <Header />

      {/* ======================= MAIN ==================== */}
      <main className='block lg:max-w-[968px] m-auto'>
        <Home />
        <About />
        <Journey />
        {/* <Qualification /> */}
        {/* <Feature /> */}
        <Skills />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
