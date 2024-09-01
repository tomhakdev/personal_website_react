import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="Projects">
      <div className="particles-container" id="particles-js-projects"></div>
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        

      <div className="project-item">
          <h3 className="project-title">Web Map Interface</h3>
          <div className="thumbnail">
            <a href="https://magenta-cendol-cd03f3.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="Images/CSDD_Website.png" alt="CSDD Website" />
            </a>
          </div>
          <div className="project-description">
            <p>Website built for the Laboratory on Ethnic Conflict Research at the Centre for the Study of Democracy and Diversity</p>
            <p>Skills: JavaScript, HTML, CSS</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">ToolPool</h3>
          <div className="thumbnail">
            <a href="https://github.com/SoslyLW/essdev-app-team" target="_blank" rel="noopener noreferrer">
              <img src="Images/ToolPool.png" alt="ToolPool Project" />
            </a>
          </div>
          <div className="project-description">
            <p>Community tool sharing app</p>
            <p>Skills: Flutter, Firebase, Android Studio</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">STAM.ai</h3>
          <div className="thumbnail">
            <a href="https://github.com/SimonNRisk/speech-app" target="_blank" rel="noopener noreferrer">
              <img src="Images/STAM_Logo.png" alt="ToolPool Project" />
            </a>
          </div>
          <div className="project-description">
            <p>AI speech therapy startup I'm working on as part of inQUbate. Website coming soon...</p>
            <p>Skills: n/a</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Pest Security System</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/Pest-Control-System" target="_blank" rel="noopener noreferrer">
              <img src="Images/Home Security System.jpg" alt="Pest Security System" />
            </a>
          </div>
          <div className="project-description">
            <p>Device that detects and deters pests using motion sensors</p>
            <p>Skills: Arduino, C++, HTML, CSS</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Movement Detection</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/Movement-Detection-Desktop-App" target="_blank" rel="noopener noreferrer">
              <img src="Images/MovementDetection.png" alt="Pest Security System" />
            </a>
          </div>
          <div className="project-description">
            <p>Desktop app that distinguishes between walking and jumping</p>
            <p>Skills: Python, Pandas, NumPy, Tkinter, Phyphox</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Guess Master</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/GuessMasterV3" target="_blank" rel="noopener noreferrer">
              <img src="Images/GuessMaster.png" alt="GuessMaster app" />
            </a>
          </div>
          <div className="project-description">
            <p>Guess the birthday</p>
            <p>Skills: Java, Android Studio</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Spreadsheet Application</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/CLISpreadsheet" target="_blank" rel="noopener noreferrer">
              <img src="Images/Spreadsheet.png" alt="Spreadsheet" />
            </a>
          </div>
          <div className="project-description">
            <p>Clone of Excel to be run in the terminal</p>
            <p>Skills: C</p>
          </div>
        </div>

        <div className="project-item">
          <h3 className="project-title">Personal Website</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/Personal-Website" target="_blank" rel="noopener noreferrer">
              <img src="Images/web-homepage.png" alt="Website Home" />
            </a>
          </div>
          <div className="project-description">
            <p>The code behind the creation of this website</p>
            <p>Skills: React.js, HTML, CSS</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
