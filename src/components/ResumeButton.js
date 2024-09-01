import React from 'react';
import './ResumeButton.css'; // Import your CSS file

const ResumeButton = () => {
  return (
    <div className="resume-download">
      <a 
        href="EMPTYFILE.pdf" 
        className="resume-button" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        Resume
      </a>
    </div>
  );
};

export default ResumeButton;
