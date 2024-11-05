import React, { useState } from 'react';
import './CloudComputing.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/cloud_roadmap.jpg'

function CloudComputing(){
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
         <h1 className="mainHeading">Cloud Computing</h1>
         <p className="overview"><b>Cloud Computing </b>is a revolutionary technology that provides on-demand access to a shared pool of configurable computing resources, such as servers, 
         storage, applications, and services, via the internet. It enhances flexibility, scalability, and cost-effectiveness, allowing businesses to scale operations without heavy 
         infrastructure investments. The advantages of Cloud Computing include reduced operational costs, improved collaboration, and accelerated deployment times for applications. 
         As organizations increasingly migrate to cloud environments, the demand for skilled professionals is growing, creating numerous job opportunities in roles such as Cloud Architect,
          Cloud Engineer, DevOps Engineer, and Cloud Consultant. The technology is trending as businesses look for innovative solutions to meet the challenges of remote work and digital transformation.</p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Foundation of Cloud Computing</b>
                    <ul className='inside-list'>
                        <li className="list-item">Overview of Cloud Computing</li>
                        <li className="list-item">Deployment Models</li>
                        <li className="list-item">Service Models</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Cloud Architecture</b>
                    <ul className='inside-list'>
                        <li className="list-item">Cloud Computing Architecture</li>
                        <li className="list-item">Virtualization</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Major Cloud Service Providers</b>
                    <ul className='inside-list'>
                        <li className="list-item">Amazon Web Services (AWS)</li>
                        <li className="list-item">Microsoft Azure</li>
                        <li className="list-item">Google Cloud Platform (GCP)</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Cloud Security and Compliance</b>
                    <ul className='inside-list'>
                        <li className="list-item">Cloud Security Principles</li>
                        <li className="list-item">Data Protection</li>
                        <li className="list-item">Compliance Standards</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Networking in the Cloud</b>
                    <ul className='inside-list'>
                        <li className="list-item">Cloud Networking Fundamentals</li>
                        <li className="list-item">Load Balancing and CDN</li>
                        <li className="list-item">DNS Management</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Application Development in the Cloud</b>
                    <ul className='inside-list'>
                        <li className="list-item">Developing Cloud-Native Applications</li>
                        <li className="list-item">DevOps Practices</li>
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

export default CloudComputing;
