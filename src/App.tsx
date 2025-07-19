import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Domains from "./components/Domains";
import Journey from "./components/Journey";
// import Schedule from './components/Schedule';
import Partners from "./components/Partners";
import Judging from "./components/Judging";
import Prizes from "./components/Prizes";
import Registration from "./components/Registration";
// import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <About />
      <Domains />
      <Journey />
      {/* <Schedule /> */}
      <Partners />
      <Judging />
      <Prizes />
      <Registration />
      {/* <FAQ /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
