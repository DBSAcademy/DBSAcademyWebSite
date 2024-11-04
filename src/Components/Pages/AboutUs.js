import React from 'react';
import './AboutUs.css';
import careerCounselingImg from '../Images/CarrerCatalistImages/persionalized.png';
import weeklyExamsImg from '../Images/CarrerCatalistImages/weeklyExams.png';
import resumeAssistanceImg from '../Images/CarrerCatalistImages/ResumeBuilding.png';
import linkedinImg from '../Images/CarrerCatalistImages/LinkedIn.png';
import interviewPrepImg from '../Images/CarrerCatalistImages/interviewPrep.png';
import jobPlacementImg from '../Images/CarrerCatalistImages/Job.png';
import skillDevImg from '../Images/CarrerCatalistImages/SkillDev.png';
import projectOpportunitiesImg from '../Images/CarrerCatalistImages/ProjectOpp.png';
import { useNavigate } from 'react-router-dom';


function AboutUs(){
    const navigate = useNavigate();
    const handleContactUs = (route) => {
        navigate('/ContactUs');
    };
    return(
        <div>
            <div>
               <h1 className='headings'> About Us</h1>
               <p className='para'>At <b>DBS IT Academy</b>, we believe in empowering individuals with the skills and knowledge they need to succeed in today’s competitive job market.
                 Since our inception, we have been dedicated to bridging the gap between theoretical education and real-world application. 
                 Our goal is to create a supportive and dynamic learning environment where students can gain practical, industry-relevant skills, 
                 preparing them to thrive in their chosen fields.</p>
                <p className='aboutuspara'>Our institute offers a wide array of courses across rapidly growing industries, including technology, data science, cloud computing, and business analysis.
                   Each program is designed by experienced professionals and tailored to provide hands-on experience through workshops, projects, and case studies. 
                   This approach ensures that our students not only understand the theoretical aspects but also develop the technical skills required to excel in their careers.</p>
                <p className='aboutuspara'>We take pride in our highly skilled trainers, who bring years of industry expertise and a passion for teaching to the classroom. With access to state-of-the-art
                   facilities and a curriculum that reflects the latest industry trends, our students receive an education that is both comprehensive and practical. 
                   Additionally, our dedicated placement support team works closely with students to connect them with job opportunities that align with their skills and career
                   aspirations.</p>
                <p className='aboutuspara'>At <b>DBS IT Academy</b>, we are more than just a training institute—we are a launchpad for future success. Our commitment to excellence, 
                   combined with our focus on student outcomes, has made us a trusted name in professional training.
                   Join us, and let us help you take the next big step in your career journey.</p>
            </div>
            <div className='vision-mission-container'>
                <div className='vision'>
                    <h2 className='headings'>Our Vision</h2>
                    <p className='aboutuspara'>Our vision is to create a place where learning truly prepares people for life, not just exams. We want to bridge the gap between what students learn in class and what they need in the real world. By developing growth, confidence, and practical skills, we aim to empower our students to build meaningful careers and make a real impact. We envision a community where lifelong learning is cherished, and curiosity is encouraged, enabling individuals to adapt and thrive in an ever-changing world. Our commitment to inclusivity ensures that every student, regardless of background, has access to quality education that fosters innovation and creativity. Ultimately, we aspire to cultivate leaders who not only excel professionally but also contribute positively to society, making a difference in the lives of others.</p>
                </div>
                <div className='mission'>
                    <h2 className='headings'>Our Mission</h2>
                    <p className='aboutuspara'>Our mission is simple: to make learning practical, personal, and impactful. We’re here to give students hands-on experiences, small class sizes with real attention, and courses that go beyond the books with real-life projects and support. We’re not just teaching skills; we’re building futures, offering career guidance, and helping every learner step confidently into the world, ready for whatever comes next. By fostering a collaborative learning environment, we encourage peer-to-peer interaction and networking, preparing students for the teamwork required in the workplace. Our dedicated mentors are committed to each student’s growth, providing tailored feedback and encouragement throughout their learning journey.</p>
                </div>
                <div className='para'>
                    <h2 className='headings'>Dynamic Career Catalyst Program</h2>
                    <p>At <b>DBS IT Academy</b>, we believe that education is just the beginning of your career journey. Our All-Encompassing Career Empowerment program is designed to support you every step of the way, ensuring you have the tools and resources needed to thrive in your chosen field. Here’s what we offer:</p>

                    <div className="career-item">
                        <img src={careerCounselingImg} alt="Career Counseling" className="list-icon" />
                        <div className="career-description">
                            <b>1.Personalized Career Counseling:</b> Our experienced advisors work with you to understand your strengths, interests, and goals.
                        </div>
                    </div>
                    
                    <div className="career-item">
                        <img src={weeklyExamsImg} alt="Weekly Examinations" className="list-icon" />
                        <div className="career-description">
                            <b>2.Weekly Examinations:</b> Structured weekly assessments help reinforce your learning and track your progress.
                        </div>
                    </div>
                    
                    <div className="career-item">
                        <img src={resumeAssistanceImg} alt="Resume Assistance" className="list-icon" />
                        <div className="career-description">
                            <b>3.Resume and Cover Letter Assistance:</b> We provide expert guidance in crafting professional resumes and cover letters.
                        </div>
                    </div>
                    
                    <div className="career-item">
                        <img src={linkedinImg} alt="LinkedIn Profile Building" className="listimg" />
                        <div className="career-description">
                            <b>4.LinkedIn Profile Building:</b> We guide you in creating a professional LinkedIn profile that showcases your skills.
                        </div>
                    </div>
                    
                    <div className="career-item">
                        <img src={interviewPrepImg} alt="Interview Preparation" className="list-icon" />
                        <div className="career-description">
                            <b>5.Interview Preparation Workshops:</b> Learn essential interview techniques and gain confidence.
                        </div>
                    </div>
                    
                    <div className="career-item">
                        <img src={jobPlacementImg} alt="Job Placement Support" className="list-icon" />
                        <div className="career-description">
                            <b>6.Job Placement Support:</b> We connect you with job opportunities through our network of industry partners.
                        </div>
                    </div>
                    
                    <div className="career-item">
                        <img src={skillDevImg} alt="Skill Development Workshops" className="list-icon" />
                        <div className="career-description">
                            <b>7.Skill Development Workshops:</b> Workshops focused on essential skills such as communication and teamwork.
                        </div>
                    </div>
                    
                    <div className="career-item">
                        <img src={projectOpportunitiesImg} alt="Project Opportunities" className="list-icon" />
                        <div className="career-description">
                            <b>8.Project Opportunities:</b> Gain practical experience through internships and real-world projects.
                        </div>
                    </div>
                </div>
            </div>
            <div>
               <h1 className='headings'>Our Promise</h1>
               <p className='para'>At <b>DBS IT Academy</b>,we are dedicated to empowering individuals through personalized guidance, practical learning, and comprehensive career 
               preparation. Our hands-on curriculum, crafted by industry experts, ensures that you gain real-world skills applicable in today’s competitive job market. 
               Beyond just academics, we offer tailored support like resume building, LinkedIn profile enhancement, and interview preparation, connecting you with opportunities 
               that align with your goals. Our inclusive community of mentors, peers, and industry professionals fosters collaboration and growth, providing a supportive environment 
               where you can unlock your potential, build confidence, and prepare for a fulfilling career.</p>
            </div>
            <h3 className="headings">Join Us – Where Knowledge Meets Opportunity! </h3>
            <div className="button-container">
                <button onClick={handleContactUs} className="more-button">
                Contact Us
                </button>
            </div>
        </div>
    
         
    )
}

export default AboutUs;