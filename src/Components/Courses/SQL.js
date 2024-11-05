import React, { useState } from 'react';
import './SQL.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/sql_roadmap.jpg'

function SQL(){
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
         <h1 className="mainHeading">SQL Server</h1>
         <p className="overview"><b>SQL Server </b>is a robust relational database management system (RDBMS) developed by Microsoft that is widely used for storing, managing, and retrieving data across various applications. It provides a comprehensive suite of tools and features that enable organizations to handle large volumes of data efficiently, ensuring data integrity, security, and scalability. SQL Server supports complex queries through its powerful Transact-SQL (T-SQL) language, making it ideal for analytics and reporting. Its integration with other Microsoft products, such as Excel and Power BI, enhances data visualization and analysis capabilities. SQL Server is increasingly in demand as businesses rely on data-driven decision-making, resulting in numerous job opportunities for SQL Server professionals in roles such as database administrators, data analysts, and data engineers.
         </p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Introduction to Databases</b>
                    <ul className='inside-list'>
                        <li className="list-item">Understanding Databases</li>
                        <li className="list-item">Database Concepts</li>
                    </ul>
                </li>
                <li className='list-headings'><b>SQL Server Installation and Configuration</b>
                    <ul className='inside-list'>
                        <li className="list-item">Installing SQL Server</li>
                        <li className="list-item">SQL Server Management Studio (SSMS)</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Transact-SQL (T-SQL) Basics</b>
                    <ul className='inside-list'>
                        <li className="list-item">Basic Queries</li>
                        <li className="list-item">Data Manipulation Language (DML)</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Advanced T-SQL</b>
                    <ul className='inside-list'>
                        <li className="list-item">Joins and Unions</li>
                        <li className="list-item">Subqueries and Common Table Expressions (CTEs)</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Database Design Principles</b>
                    <ul className='inside-list'>
                        <li className="list-item">Normalization</li>
                        <li className="list-item">Designing Tables and Relationships</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Stored Procedures and Functions</b>
                    <ul className='inside-list'>
                        <li className="list-item">Stored Procedures</li>
                        <li className="list-item">User-Defined Functions (UDFs)</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Performance Tuning and Optimization</b>
                    <ul className='inside-list'>
                        <li className="list-item">Indexes</li>
                        <li className="list-item">Execution Plans</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Security and User Management</b>
                    <ul className='inside-list'>
                        <li className="list-item">Database Security Fundamentals</li>
                        <li className="list-item">Authentication Methods</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Backup and Recovery Strategies</b>
                    <ul className='inside-list'>
                        <li className="list-item">Backup Types</li>
                        <li className="list-item">Restoring Databases</li>
                    </ul>
                </li>
                <li className='list-headings'><b>SQL Server Integration Services (SSIS)</b>
                    <ul className='inside-list'>
                        <li className="list-item">Introduction to ETL</li>
                        <li className="list-item">Creating SSIS Packages</li>
                    </ul>
                </li>
                <li className='list-headings'><b>SQL Server Reporting Services (SSRS)</b>
                    <ul className='inside-list'>
                        <li className="list-item">Reporting Basics</li>
                        <li className="list-item">Creating and Deploying Reports</li>
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

export default SQL;
