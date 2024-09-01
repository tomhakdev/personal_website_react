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
              <img src="/images/CSDD_Website.png" alt="CSDD Website"/>
            </a>
          </div>
          <div className="project-description">
            <p>Developing a website for the Laboratory on Ethnic Conflict Research at the Centre for the Study of Democracy and Diversity. The site features an interactive map interface highlighting countries involved in territorial conflicts since WWII.</p>
            <p>Skills: JavaScript, HTML, CSS</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">ToolPool</h3>
          <div className="thumbnail">
            <a href="https://github.com/SoslyLW/essdev-app-team" target="_blank" rel="noopener noreferrer">
              <img src="/images/ToolPool.png" alt="ToolPool Project"/>
            </a>
          </div>
          <div className="project-description">
            <p>Tool-sharing app (IOS + Android) created as part of the Queen's Engineering Society Software Development Team (ESSDEV). The app enables users to create profiles, connect with others in their community, and borrow tools, fostering a shared resource pool.</p>
            <p>Skills: Flutter, Firebase, Android Studio</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">STAM.ai</h3>
          <div className="thumbnail">
            <a href="https://github.com/SimonNRisk/speech-app" target="_blank" rel="noopener noreferrer">
              <img src="/images/STAM_Logo.png" alt="ToolPool Project"/>
            </a>
          </div>
          <div className="project-description">
            <p>AI speech-thearpy startup I am co-founding. In the process of developing a web app that helps users improve speech impediments through engaging, gamified exercises. The app leverages AI to accurately assess whether words are pronounced correctly, providing real-time feedback for users. Website coming soon...</p>
            <p>Skills: n/a</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Pest Security System</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/Pest-Control-System" target="_blank" rel="noopener noreferrer">
              <img src="/images/Home Security System.jpg" alt="Pest Security System"/>
            </a>
          </div>
          <div className="project-description">
            <p>Pest detection device built as part of the ECE Design and Practice course. This ground-based device uses sound waves to detect nearby motion, triggering flashing lights and a loud noise to scare away pests. It’s a practical solution for protecting crops and gardens from unwanted intruders.</p>
            <p>Skills: Arduino, C++, HTML, CSS</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Movement Detection</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/Movement-Detection-Desktop-App" target="_blank" rel="noopener noreferrer">
              <img src="/images/MovementDetection.png" alt="Pest Security System"/>
            </a>
          </div>
          <div className="project-description">
            <p>Desktop app for distinguishing between walking and jumping, using data collected via the Phyphox app. Created as part of a Data Science course, the app processes sensor data to accurately identify and categorize these movements, showcasing the application of data analysis in real-time motion detection.</p>
            <p>Skills: Python, Pandas, NumPy, Tkinter, Phyphox</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Guess Master</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/GuessMasterV3" target="_blank" rel="noopener noreferrer">
              <img src="/images/GuessMaster.png" alt="GuessMaster app"/>
            </a>
          </div>
          <div className="project-description">
            <p>Guessing game app using Java and Android Studio as part of the Object-Oriented Programming course. The app challenges users to guess the birth date of a celebrity or the founding date of a country based on an image. It features a ticket reward system that rewards players for correct answers, enhancing engagement and learning.</p>
            <p>Skills: Java, Android Studio</p>
          </div>
        </div>


        <div className="project-item">
          <h3 className="project-title">Spreadsheet Application</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/CLISpreadsheet" target="_blank" rel="noopener noreferrer">
              <img src="/images/Spreadsheet.png" alt="Spreadsheet"/>
            </a>
          </div>
          <div className="project-description">
            <p>Excel clone entirely in C, replicating the core functionality of a basic spreadsheet app. Users can input data and perform various operations on it, simulating real-world spreadsheet tasks. This project was completed as part of the Data Structures and Algorithms course.</p>
            <p>Skills: C</p>
          </div>
        </div>

        <div className="project-item">
          <h3 className="project-title">Personal Website</h3>
          <div className="thumbnail">
            <a href="https://github.com/tomhakdev/Personal-Website" target="_blank" rel="noopener noreferrer">
              <img src="/images/web-homepage.png" alt="Website Home"/>
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
