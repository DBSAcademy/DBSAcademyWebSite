import React, { useState } from 'react';
import './SalesForce.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/saleforce_roadmap.jpg'

function SalesForce(){
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
         <h1 className="mainHeading">Salesforce</h1>
         <p className="overview"><b>Salesforce </b>is a leading cloud-based Customer Relationship Management (CRM) platform that enables businesses to manage customer data, sales processes, and service interactions efficiently. Its extensive suite of applications includes sales automation, customer service, marketing automation, analytics, and application development, making it a versatile tool for businesses of all sizes. The platform's advantages include enhanced customer relationships, improved sales performance, streamlined operations, and the ability to customize applications through its robust development tools. As companies increasingly adopt digital transformation strategies, Salesforce professionals are in high demand, offering numerous job opportunities in roles such as Salesforce Administrator, Developer, Consultant, and Architect.</p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Introduction to Salesforce</b>
                    <ul className='inside-list'>
                        <li className="list-item">What is Salesforce?</li>
                        <li className="list-item">Salesforce Editions</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Salesforce Fundamentals</b>
                    <ul className='inside-list'>
                        <li className="list-item">User Interface Navigation</li>
                        <li className="list-item">Standard vs. Custom Objects</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Data Management</b>
                    <ul className='inside-list'>
                        <li className="list-item">Data Models and Relationships</li>
                        <li className="list-item">Data Import and Export</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Salesforce Automation</b>
                    <ul className='inside-list'>
                        <li className="list-item">Workflow Rules</li>
                        <li className="list-item">Process Builder</li>
                        <li className="list-item">Approval Processes</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Salesforce Security Model</b>
                    <ul className='inside-list'>
                        <li className="list-item">User Management</li>
                        <li className="list-item">Data Security</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Reporting and Analytics</b>
                    <ul className='inside-list'>
                        <li className="list-item">Creating Reports and Dashboards</li>
                        <li className="list-item">Salesforce Einstein Analytics</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Customization and Development</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to Salesforce App Builder</li>
                        <li className="list-item">Visualforce and Lightning Components</li>
                        <li className="list-item">Apex Programming</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Integration Techniques</b>
                    <ul className='inside-list'>
                        <li className="list-item">Integration Concepts</li>
                        <li className="list-item">Using Salesforce Connect</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Salesforce Community and Experience Cloud</b>
                    <ul className='inside-list'>
                        <li className="list-item">Building Communities</li>
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

export default SalesForce;
