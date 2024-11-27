import React, { useState } from 'react';
import './Python.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/python_roadmap.jpg';
import emailjs from 'emailjs-com';

function Python(){
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

        // Send email using EmailJS
        emailjs
            .send(
                'service_fxr366t', // Replace with your EmailJS service ID
                'template_h30tj1u', // Replace with your EmailJS template ID
                {
                    name: formData.name,
                    email: formData.email,
                    mobile: formData.mobile,
                    course: formData.course,
                },
                'n1d1fLWTG-h7eFF98' // Replace with your EmailJS user ID (found in EmailJS dashboard)
            )
            .then(
                (response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    setSubmitted(true);
                    setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        course: '',
                    });
                },
                (error) => {
                    console.error('Error sending email:', error);
                }
            );
    };
    return (
       <div>
         <h1 className="mainHeading">Python</h1>
         <p className="overview"><b>Python </b>is a versatile and powerful programming language widely used in various domains such as web development, data science, machine learning, automation, and scripting. Its simplicity and readability make it an excellent choice for beginners, while its robust libraries and frameworks support complex applications. Python's popularity continues to grow, driven by its applicability in cutting-edge technologies like artificial intelligence and big data. Job opportunities for Python developers are abundant, with roles ranging from software engineers to data scientists and machine learning engineers. As organizations increasingly adopt Python for their projects, mastering this language opens numerous career pathways and enhances employability in the tech industry.</p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div className="container-list-roadmap">
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Introduction to Python</b>
                    <ul className='inside-list'>
                        <li className="list-item">Overview of Python</li>
                        <li className="list-item">Setting Up the Development Environment</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Python Basics</b>
                    <ul className='inside-list'>
                        <li className="list-item">Syntax and Structure</li>
                        <li className="list-item">Data Types and Variables</li>
                        <li className="list-item">Operators</li>
                        <li className="list-item">Control Flow</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Functions and Modules</b>
                    <ul className='inside-list'>
                        <li className="list-item">Defining Functions</li>
                        <li className="list-item">Understanding Modules and Packages</li>
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
                <li className='list-headings'><b>File Handling</b>
                    <ul className='inside-list'>
                        <li className="list-item">Reading and Writing Files</li>
                        <li className="list-item">Exception Handling</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Data Structures and Algorithms</b>
                    <ul className='inside-list'>
                        <li className="list-item">Understanding Data Structures</li>
                        <li className="list-item">IBasic Algorithms</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Web Development with Python</b>
                    <ul className='inside-list'>
                        <li className="list-item">Flask Framework</li>
                        <li className="list-item">Django Framework</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Machine Learning and AI</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to Machine Learning</li>
                        <li className="list-item">Scikit-Learn Library</li>
                        <li className="list-item">Deep Learning with TensorFlow and Keras</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Testing and Debugging</b>
                    <ul className='inside-list'>
                        <li className="list-item">Unit Testing</li>
                        <li className="list-item">Debugging Techniques</li>
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

export default Python;
