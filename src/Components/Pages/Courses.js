import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css'; 
import '../Courses/AI';
import '../Courses/DataScience';
import '../Courses/CloudComputing';
import '../Courses/DevOps';
import '../Courses/Java';
import '../Courses/Python';
import '../Courses/JavaFullStack';
import '../Courses/PyhtonFullStack';
import '../Courses/MernFullStack';
import '../Courses/DotNet';
import '../Courses/SQL';
import '../Courses/SalesForce';
import '../Courses/DataAnalysis';
import '../Courses/Testing';
import '../Pages/ContactUs'


function Courses() {
    const navigate = useNavigate();

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
        { id: 7, name: 'Java Full Stack Development', image: require('../Images/Courses/JavaFullStack.jpg'), route: '/JavaFullStack' },
        { id: 8, name: 'Python Full Stack Development', image: require('../Images/Courses/PythonFullStack.jpg'), route: '/PythonFullStack' },
        { id: 9, name: 'Mern Full Stack Development', image: require('../Images/Courses/MernFullStack.png'), route: '/MernFullStack' },
        { id: 10, name: 'Dot Net', image: require('../Images/Courses/dotnet.png'), route: '/DotNet' },
        { id: 11, name: 'SQL Server', image: require('../Images/Courses/SQL.jpg'), route: '/SQL' },
        { id: 12, name: 'SalesForce', image: require('../Images/Courses/Salesforce.png'), route: '/SalesForce' },
        { id: 13, name: 'DataAnalysis', image: require('../Images/Courses/DataAnalysis.jpg'), route: '/DataAnalysis' },
        { id: 14, name: 'Software Testing', image: require('../Images/Courses/Testing.jpg'), route: '/Testing' },
        
    ];

    return (
        <div>
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
            <h3 className="courses">Join Us – Where Knowledge Meets Opportunity! </h3>
            <div className="button-container">
                <button onClick={handleContactUs} className="more-button">
                Contact Us
                </button>
            </div>
        </div>
    );
}

export default Courses;
