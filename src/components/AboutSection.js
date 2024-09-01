import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="About" className="about-me">
            <h1>About Me</h1>
            <div className="content">
                <div className="profile-pic">
                    <img src="/images/Hyperloop Headshot.png" alt="Profile Picture"/>
                </div>
                <div className="details">
                    <div className="experience">
                        <h2>Currently Working:</h2>
                        <p><strong>Laboratory for Ethnic Conflict Research</strong><br />Web Developer</p>
                        <p><strong>inQUbate</strong><br />Founder / Software Developer</p>
                        <p><strong>QDAA</strong><br />Project Manager</p>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <img src="/images/queens_university_image.png" alt="Queen's University Logo" className="university-logo" />
                        <p>BASc <br />Computer Engineering<br /><span>2022–2026</span></p>
                    </div>
                </div>
            </div>
            <div className="bio">
                        <p>Hi there! I am a diligent and motivated Computer Engineering student at Queen's University. I am interested in software engineering, AI, and entrepreneurship. Recently, I co-founded STAM.ai as a member of inQUbate. Additionally, I have worked as a Web Developer for the Laboratory for Ethnic Conflict Research at Queen's and as a Project Manager at Queen's Data Analytics Association.</p>
                </div>
        </section>
    );
};

export default AboutSection;

