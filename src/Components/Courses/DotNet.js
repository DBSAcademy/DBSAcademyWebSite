import React, { useState } from 'react';
import './DotNet.css'
import { useNavigate } from 'react-router-dom';
import '../Pages/ContactUs'
import courseRoadmapImage from '../Images/CoursesRoadMap/dotnet-roadmap.jpg'

function DotNet(){
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
         <h1 className="mainHeading">Dot Net</h1>
         <p className="overview"><b>.NET development with AWS (Amazon Web Services) </b>.NET development with AWS (Amazon Web Services) combines the power of the .NET framework with the scalability and flexibility of cloud computing through AWS. This technology stack allows developers to build, deploy, and manage applications in a cloud environment, enabling them to take advantage of AWS’s wide range of services, such as computing power, storage options, and databases. With .NET's robust capabilities for developing web applications, APIs, and microservices, developers can create high-performance applications that can scale based on demand. The integration of AWS services, such as AWS Lambda for serverless computing, Amazon RDS for managed databases, and Amazon S3 for storage, enhances the deployment process and operational efficiency. As organizations increasingly adopt cloud solutions, the demand for .NET developers skilled in AWS continues to rise, offering numerous job opportunities in various industries.</p>
         <div>
         <h1 className="mainHeading">Course Content</h1>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
            <ol className='list-container'>
                <li className='list-headings'><b>Fundamentals of Software Development</b>
                    <ul className='inside-list'>
                        <li className="list-item">Basic understanding of programming concepts (variables, loops, conditionals)</li>
                        <li className="list-item">Object-oriented programming (OOP) principles</li>
                    </ul>
                </li>
                <li className='list-headings'><b>C# Language Proficiency</b>
                    <ul className='inside-list'>
                        <li className="list-item">C# syntax and features (LINQ, async/await)</li>
                        <li className="list-item">Understanding of .NET libraries and frameworks</li>
                    </ul>
                </li>
                <li className='list-headings'><b>ASP.NET Development</b>
                    <ul className='inside-list'>
                        <li className="list-item">ASP.NET Core</li>
                        <li className="list-item">Front-End Development</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Database Management</b>
                    <ul className='inside-list'>
                        <li className="list-item">Working with SQL Server and Entity Framework</li>
                        <li className="list-item">Understanding NoSQL databases on AWS</li>
                    </ul>
                </li>
                <li className='list-headings'><b>AWS Fundamentals</b>
                    <ul className='inside-list'>
                        <li className="list-item">Overview of AWS services </li>
                        <li className="list-item">Setting up an AWS account and navigating the AWS Management Console</li>
                        <li className="list-item">Understanding AWS security best practices</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Integration of .NET with AWS</b>
                    <ul className='inside-list'>
                        <li className="list-item">Deploying ASP.NET applications on AWS Elastic Beanstalk</li>
                        <li className="list-item">Using AWS SDK for .NET to interact with AWS services</li>
                        <li className="list-item">Implementing serverless architecture using AWS Lambda and API Gateway</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Microservices Architecture</b>
                    <ul className='inside-list'>
                        <li className="list-item">Designing and implementing microservices with .NET</li>
                        <li className="list-item">Communication between services using AWS services (SQS, SNS)</li>
                    </ul>
                </li>
                <li className='list-headings'><b>DevOps Practices</b>
                    <ul className='inside-list'>
                        <li className="list-item">CI/CD pipelines using AWS CodePipeline and CodeDeploy</li>
                        <li className="list-item">Infrastructure as Code (IaC) using AWS CloudFormation or Terraform</li>
                    </ul>
                </li>
                <li className='list-headings'><b>Testing and Quality Assurance</b>
                    <ul className='inside-list'>
                        <li className="list-item">Writing unit and integration tests in .NET</li>
                        <li className="list-item">Automated testing and deployment strategies</li>
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

export default DotNet;
