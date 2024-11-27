import React, { useState } from 'react';
import './AI.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/AI_roadmap.jpg'
import emailjs from 'emailjs-com';

function AI(){
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
         <h1 className="mainHeading">Artificial Intelligence</h1>
         <p className="overview"><b>Artificial Intelligence (AI) </b>is a transformative technology that enables machines to mimic human intelligence, making it one of the most sought-after fields in tech.
             AI is used across a variety of industries, including healthcare for diagnostics, finance for fraud detection, and retail for personalized recommendations. 
             It powers applications like chatbots, image recognition, natural language processing, and autonomous systems. The demand for AI professionals is booming, with
              roles like AI Engineer, Machine Learning Engineer, Data Scientist, and AI Research Scientist becoming prominent. Companies are seeking skilled 
              AI practitioners to innovate and optimize processes, drive data-driven insights, and develop intelligent systems, making AI expertise a valuable asset in the job market.</p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div className="container-list-roadmap">
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Foundation and Basics</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to AI & Machine Learning</li>
                        <li className="list-item">Mathematics for AI</li>
                        <li className="list-item">Programming for AI</li>
                        <li className="list-item">Data Preprocessing</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Machine Learning Fundamentals</b>
                    <ul className='inside-list'>
                        <li className="list-item">Supervised Learning</li>
                        <li className="list-item">Unsupervised Learning</li>
                        <li className="list-item">Reinforcement Learning</li>
                        <li className="list-item">Model Evaluation and Hyperparameter Tuning</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Deep Learning</b>
                    <ul className='inside-list'>
                        <li className="list-item">Neural Networks</li>
                        <li className="list-item">Convolutional Neural Networks (CNNs)</li>
                        <li className="list-item">Recurrent Neural Networks (RNNs)</li>
                        <li className="list-item">Generative Models</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Specialization in AI Applications</b>
                    <ul className='inside-list'>
                        <li className="list-item">Natural Language Processing (NLP)</li>
                        <li className="list-item">Computer Vision</li>
                        <li className="list-item">Reinforcement Learning in Depth</li>
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

export default AI;