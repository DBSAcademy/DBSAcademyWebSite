import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import '../Courses/AI';
import '../Courses/DataScience';
import '../Courses/CloudComputing';
import '../Courses/DevOps';
import '../Courses/Java';
import '../Courses/Python';
import '../Pages/ContactUs'
import instituteLogo from '../Images/DBSlogo1.png'; 
function Home() {
    const navigate = useNavigate();

    const handleKnowMore = () => {
        navigate('/AboutUs');
    };
    const handleExploreMore = () => {
        navigate('/Courses');
    };

    const handleCourseClick = (route) => {
        navigate(route);
    };

    const handleContactUs = (route) => {
      navigate('/ContactUs');
  };

    const courses = [
        { id: 1 , name: 'Artificial Intelligence', image: require('../Images/Courses/Ai.jpeg'), route: '/AI' },
        { id: 2, name: 'Data Science', image: require('../Images/Courses/DataScience.jpg'), route: '/DataScience' },
        { id: 3, name: 'Cloud Computing', image: require('../Images/Courses/cloud.avif'), route: '/CloudComputing' },
        { id: 4, name: 'DevOps', image: require('../Images/Courses/DevOps.jpeg'), route: '/DevOps' },
        { id: 5, name: 'Java', image: require('../Images/Courses/java.jpg'), route: '/Java' },
        { id: 6, name: 'Python', image: require('../Images/Courses/python.png'), route: '/Python' },
        
    ];

    return (
        <div>
            <h1 className="about-us">Get to Know Us</h1>
            <div className="about-us-context">
                <p>Welcome to <b>DBS IT Academy</b>, your gateway to comprehensive and transformative learning! Located in [City, State/Country], we pride ourselves on delivering high-quality education and training to prepare our students for real-world success. Our institute offers both online and offline training sessions designed to meet the diverse needs of our students, providing flexible learning options for everyone.</p>
                <p>We keep our batches intentionally small, ensuring personalized attention and a supportive learning environment. Each course includes hands-on practice sessions, where students work on real-time projects to build practical skills that go beyond the classroom. In addition, we offer classroom recordings for easy revision and a Career Support Program to guide students through job placements, interviews, and career planning. </p>
                <p>Join <b>DBS IT Academy</b> to experience focused training, valuable resources, and the support you need to achieve your professional aspirations. Let’s build your future together!</p>
            </div>

            <div className="button-container">
                <button onClick={handleKnowMore} className="more-button">
                    Know More
                </button>
            </div>

            <div className='courses-container'>
                <h1 className="courses">Our Courses</h1>
                <div className="courses-grid">
                    {courses.map((course) => (
                        <div key={course.id} className="course-card" onClick={() => handleCourseClick(course.route)}>
                            <img src={course.image} alt={course.name} className="course-image" />
                            <h2 className="course-name">{course.name}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className="button-container">
                <button onClick={handleExploreMore} className="more-button">
                Explore More
                </button>
            </div>

            <h1 className="headings">What We Do</h1>
            <img src={require('../Images/what we do.png')} alt="What We Do" className="what-we-do-image" /> 

            <div>
              <div className="advantages-container">
              <img src={instituteLogo} alt="Institute Logo" className="institute-logo" />
              <h1 className="advantages-title">Advantages</h1>
              </div>

              <div className="adv-grid">
                <div className="adv-container">
                  <h4 className="adv">Flexible Training Options</h4>
                  <p className='advContext'>We understand that each student has unique learning needs, which is why we offer both online and offline training options. Whether you prefer the immersive environment of in-person classes or the convenience of online sessions, our institute provides high-quality, interactive training for every schedule and lifestyle.</p>
                </div>
                <div className="adv-container">
                  <h4 className="adv">Personalized Attention</h4>
                  <p className='advContext'>Our commitment to limited batch sizes allows us to give each student the personalized attention they deserve. Smaller groups mean more one-on-one interactions with instructors, allowing for a more tailored learning experience where students can clarify doubts and fully grasp concepts.</p>
                </div>
                <div className="adv-container">
                  <h4 className="adv">Hands-on Practice with Real-Time Projects</h4>
                  <p className='advContext'>At our institute, theory meets practice. We incorporate real-time projects into our curriculum so that students can apply what they learn in practical settings. These projects not only enhance learning but also build confidence by letting students tackle challenges similar to those they will face in the industry.</p>
                </div>
                <div className="adv-container">
                  <h4 className="adv">Career Support and Placement Assistance</h4>
                  <p className='advContext'>Our support doesn’t end with course completion. Through our Career Support Program, we assist students in preparing for interviews, building resumes, and connecting with industry professionals. This guidance is key to ensuring our graduates are career-ready and stand out in competitive job markets.</p>
                </div>
               </div>
            </div>

            <h1 className="headings">Batches</h1>
            <h1>[.......]</h1>

            <div>
              <h1 className="headings">Join a Community of Innovators</h1>
              <div className="adv-grid">
                <div className="adv-container">
                  <h4 className="adv">Reasonable Prices</h4>
                  <p className='advContext'>At our institute, we believe that quality education should be accessible to everyone. Our courses are priced competitively to ensure that students from all backgrounds can afford the best training in their chosen field. We maintain transparent pricing with no hidden fees, providing excellent value without compromising on the quality of education or resources. Our commitment to affordable learning empowers students to invest in their future with confidence.</p>
                </div>
                <div className="adv-container">
                  <h4 className="adv">Classroom Training</h4>
                  <p className='advContext'>Our classroom training sessions offer an immersive and engaging learning experience. With well-equipped facilities, experienced instructors, and a collaborative environment, students benefit from direct interaction with both faculty and peers. Our classroom training is designed for students who prefer structured learning and hands-on support, ensuring every student receives focused attention and guidance as they master new skills.</p>
                </div>
                <div className="adv-container">
                  <h4 className="adv">Online Training</h4>
                  <p className='advContext'>We understand the importance of flexibility in today’s fast-paced world, which is why we offer comprehensive online training options. Our virtual classrooms are interactive and feature live sessions, recorded lessons, and hands-on assignments that students can access from anywhere. This flexible approach allows students to learn at their own pace while receiving the same quality of education and support as our in-person programs.</p>
                </div>
                <div className="adv-container">
                  <h4 className="adv">100% Placement</h4>
                  <p className='advContext'>Our 100% placement assistance program is tailored to help students transition smoothly from the classroom to their chosen careers. We provide dedicated career support, including resume building, interview preparation, and connections with industry professionals. Through our extensive network of partner companies and recruitment events, we ensure that every student has access to the best opportunities that align with their career goals.</p>
                </div>
               </div>
            </div>

            <h1>Follow Us On </h1>
            <h1>Make a Call </h1>
            <h1>Send Email</h1>
            <h3 className="adv">Join Us – Where Knowledge Meets Opportunity! </h3>
            <div className="button-container">
                <button onClick={handleContactUs} className="more-button">
                Contact Us
                </button>
            </div>


</div>
    );
}

export default Home;
