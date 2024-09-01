import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import TypedText from "./components/TypedText";
import BackgroundStyles from "./components/BackgroundStyles";
import HomeSubtitles from "./components/HomeSubtitles";
import ResumeButton from './components/ResumeButton';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

import ParticlesComponent from './components/particles';



function App() {
  return (
    <div className="App">
      <ParticlesComponent id = 'particles'/>
      <ParticlesBackground />
      <Navbar />
      <TypedText />
      
      <Title />
      
      <HomeSubtitles />
      <ResumeButton />
      <BackgroundStyles/>

      <AboutSection />

      <Projects />

      <Contact/>


      {/* Other components will be added here */}
    </div>
  );
}


export default App;
