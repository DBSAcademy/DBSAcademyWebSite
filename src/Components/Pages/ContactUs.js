import React, { useState } from 'react';
import './ContactUs.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
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
    }
    return (
        <div>
            <h1 className='headings'>Contact Us</h1>
            <div className="contact-cards-container">
                <div className="contact-card" onClick={() => window.open('https://www.instagram.com', '_blank')}>
                    <div style={{ display: 'inline-block', marginRight: '15px' }}>
                        <InstagramIcon style={{ fontSize: 40, color: '#E75480' }} />
                        <span className="contact-card-text">Instagram</span>
                    </div>
                    <div style={{ display: 'inline-block' }} onClick={() => window.open('https://www.linkedin.com', '_blank')}>
                        <LinkedInIcon style={{ fontSize: 40, color: '#0A66C2' }} />
                        <span className="contact-card-text">LinkedIn</span>
                    </div>
                    <span className="contact-card-text"><h3 style={{ color: '#1e7049' }}>Follow Us On</h3></span>
                </div>

                <div className="contact-card">
                    <CallIcon style={{ fontSize: 40, color: '#1e7049' }} />
                    <div>
                        <a href="tel:+918340863204" style={{ display: 'block', margin: '10px 0', color: 'black', textDecoration: 'none' }}>
                            <span style={{ fontSize: '20px' }}>+91 8340863204</span>
                        </a>
                    </div>
                    <div>
                        <a href="tel:+919121067423" style={{ display: 'block', margin: '10px 0', color: 'black', textDecoration: 'none' }}>
                            <span style={{ fontSize: '20px' }}>+91 9121067423</span>
                        </a>
                    </div>
                    <span className="contact-card-text"><h3 style={{ color: '#1e7049' }}>Call Us</h3></span>
                </div>

                <div className="contact-card" onClick={() => window.location.href = 'mailto:dbsacademy25@gmail.com'}>
                    <MailIcon style={{ fontSize: 40, color: 'purple' }} />
                    <span className="contact-card-phone-number">dbsacademy25@gmail.com</span>
                    <span className="contact-card-text"><h3 style={{ color: '#1e7049' }}>Send an Email</h3></span>
                </div>
            </div>
            <h1>[Should add location map......]</h1>
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
        </div>
    );
}

export default ContactUs;
