import React, { useState } from 'react';
import './Testing.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/testing_roadmap.jpg'

function Testing(){
    const navigate = useNavigate();
    const handleContactUs = (route) => {
        navigate('/ContactUs'); 
    };
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        course: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({
            name: '',
            mobile: '',
            email: '',
            course: ''
        });
    };
    return (
       <div>
         <h1 className="mainHeading">Software Testing</h1>
         <p className="overview"><b>Software Testing </b>Software Testing is a critical process in the software development lifecycle that aims to ensure the quality and functionality of software applications. By systematically evaluating a software product, testers can identify defects, ensure compliance with requirements, and validate performance. The importance of software testing cannot be overstated, as it helps in preventing costly errors, enhancing user satisfaction, and ensuring security and reliability. With the rise of agile methodologies and DevOps practices, the demand for skilled software testers is on the rise. Job opportunities in this field include roles such as Quality Assurance (QA) Tester, Test Engineer, and Automation Tester. As organizations increasingly prioritize quality in their software development, the landscape for software testing continues to evolve, with opportunities in manual testing, automation testing, performance testing, and security testing.</p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Introduction to Software Testing</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to AI & Machine Learning</li>
                        <li className="list-item">Understanding Software Testing</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Software Development Lifecycle (SDLC)</b>
                    <ul className='inside-list'>
                        <li className="list-item">Phases of SDLC</li>
                        <li className="list-item">Role of Testing in SDLC</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Testing Fundamentals</b>
                    <ul className='inside-list'>
                        <li className="list-item">Types of Testing</li>
                        <li className="list-item">Test Levels and Strategies</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Manual Testing Techniques</b>
                    <ul className='inside-list'>
                        <li className="list-item">Test Case Design</li>
                        <li className="list-item">Defect Management</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Automation Testing</b>
                    <ul className='inside-list'>
                        <li className="list-item">TIntroduction to Automation Testing</li>
                        <li className="list-item">Automation Tools</li>
                        <li className="list-item">Writing Automated Tests</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Performance Testing</b>
                    <ul className='inside-list'>
                        <li className="list-item">Understanding Performance Testing</li>
                        <li className="list-item">Performance Testing Tools</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Security Testing</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to Security Testing</li>
                        <li className="list-item">Security Testing Tools</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Real-World Projects</b>
                <ul className='inside-list'>
                        <li className="list-item">Project names</li>
                    </ul></li>
                <li className='list-headings'><b>Placement Training</b>
                    <ul className='inside-list'>
                        <li className="list-item">Interview Preparation</li>
                        <li className="list-item">Resume Building & LinkedIn Optimization</li>
                        <li className="list-item">Soft Skills & Communication</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Mock Interviews</b>
                    <ul className='inside-list'>
                        <li className="list-item">Technical Rounds</li>
                        <li className="list-item">HR Rounds</li>
                        <li className="list-item">Feedback Sessions</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Certification</b>
                    <ul className='inside-list'>
                        <li className="list-item">Course Completion Certificate</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Placement</b>
                    <ul className='inside-list'>
                        <li className="list-item">Job Placement Support</li>
                        <li className="list-item">Career Counseling</li>
                    </ul>
                </li>
            </ol>
            </div>
            <div className="courseRoadMap-container">
                    <img src={courseRoadmapImage} alt="Course Roadmap"className='courseRoadMap' />
                </div>
            </div>
            <h1 className="mainHeading">Course's Key Features</h1>
            <div className="course-features-container">
            <ul className='course-features'>
                        <li className="course-features-item">Comprehensive Curriculum</li>
                        <li className="course-features-item">Hands-On Learning</li>
                        <li className="lcourse-features-item"> Expert Instructors</li>
                        <li className="course-features-item">Certifications and Accreditations</li>
                        <li className="course-features-item">Flexible Learning Options</li>
                        <li className="course-features-item">Cutting-Edge Technology and Tools</li>
                        <li className="course-features-item">Career Support</li>
                        <li className="course-features-item">Personalized Learning Experience</li>
                        <li className="course-features-item">Comprehensive Study Materials</li>
                        <li className="course-features-item">Feedback and Continuous Improvement</li>
                        <li className="course-features-item">Innovative Learning Techniques</li>
                        <li className="course-features-item">Industry-Ready Skills</li>
            </ul>
            </div>
         </div>
         <div>
         <form onSubmit={handleSubmit} className="contact-form">
                <h2>Contact Me</h2>
                <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5', textAlign: 'center' }}>
                  Please fill in the details below, and our team member will contact you.
                </p>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Mobile Number:
                    <input 
                        type="tel" 
                        name="mobile" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Course Name:
                    <select 
                        name="course" 
                        value={formData.course} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select a course</option>
                        <option value="AI">Artificial Intelligence</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="MERN Full Stack">MERN Full Stack</option>
                        <option value=".NET with AWS">.NET with AWS</option>
                        <option value="SQL Server">SQL Server</option>
                        <option value="Salesforce">Salesforce</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="Software Testing">Software Testing</option>
                    </select>
                </label>
                <button type="submit" className="submit-button">Submit</button>
            </form>

            {submitted && <p className="success-message">Thank you for your submission!</p>}
         </div>
         <h3 className="mainHeading">Join Us – Where Knowledge Meets Opportunity! </h3>
         <div className="button-container">
                <button onClick={handleContactUs} className="more-button">
                Contact Us
                </button>
            </div>
       </div>
    );
}

export default Testing;
