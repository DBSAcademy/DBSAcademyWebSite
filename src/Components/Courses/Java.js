import React, { useState } from 'react';
import './Java.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/java_roadmap.jpg'

function Java(){
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
         <h1 className="mainHeading">Java</h1>
         <p className="overview"><b>Java </b>is a versatile, high-level programming language widely recognized for its platform independence, enabling developers to write code that runs on any device equipped with the Java Virtual Machine (JVM). Known for its robust security features and scalability, Java is a staple in enterprise-level applications, mobile development (especially Android apps), and web applications. Its object-oriented nature promotes code reusability and maintainability, making it a favorite among developers for building complex systems. With a rich ecosystem of libraries and frameworks (such as Spring and Hibernate), Java continues to evolve, ensuring it remains relevant in today's fast-paced technology landscape. The demand for Java developers is consistently high, with numerous job opportunities available in software development, application development, and backend programming.</p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div className="container-list-roadmap">
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Introduction to Java</b>
                    <ul className='inside-list'>
                        <li className="list-item">Overview of Java</li>
                        <li className="list-item">Setting Up the Development Environment</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Java Basics</b>
                    <ul className='inside-list'>
                        <li className="list-item">Syntax and Structure</li>
                        <li className="list-item">Data Types and Variables</li>
                        <li className="list-item">Operators</li>
                        <li className="list-item">Control Flow</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Object-Oriented Programming (OOP)</b>
                    <ul className='inside-list'>
                        <li className="list-item">Core Concepts of OOP</li>
                        <li className="list-item">Inheritance</li>
                        <li className="list-item">Polymorphism</li>
                        <li className="list-item">Encapsulation</li>
                        <li className="list-item">Abstraction</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Java Collections Framework</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to Collections</li>
                        <li className="list-item">Types of Collections</li>
                        <li className="list-item">Generics</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Exception Handling</b>
                    <ul className='inside-list'>
                        <li className="list-item">Understanding Exceptions</li>
                        <li className="list-item">Exception Handling Mechanisms</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Input/Output (I/O) in Java</b>
                    <ul className='inside-list'>
                        <li className="list-item">File Handling</li>
                        <li className="list-item">Understanding Streams</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Multithreading and Concurrency</b>
                    <ul className='inside-list'>
                        <li className="list-item">Creating Threads</li>
                        <li className="list-item">Thread Management</li>
                        <li className="list-item">Concurrent Collections</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Java Database Connectivity (JDBC)</b>
                    <ul className='inside-list'>
                        <li className="list-item">Connecting to Databases</li>
                        <li className="list-item">Executing SQL Queries</li>
                        <li className="list-item">Transactions and Batch Processing</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Java Frameworks</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to Frameworks</li>
                        <li className="list-item">Spring Framework</li>
                        <li className="list-item">Hibernate</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Web Development with Java</b>
                    <ul className='inside-list'>
                        <li className="list-item">Servlets and JSP</li>
                        <li className="list-item">RESTful Web Services</li>
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

export default Java;
