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
import '../Pages/ContactUs';

import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


function NewBatches() {
    const navigate = useNavigate();

    const handleCourseClick = (route) => {
        navigate(route);
    };

    const handleContactUs = (route) => {
        navigate('/ContactUs');
    };

    const batches = [
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
            <h1 className="headings">New Batches</h1>
            <div className="courses-grid">
                {batches.map((batch) => (
                    <div key={batch.id} className="batch-card" onClick={() => handleCourseClick(batch.route)}>
                        <img src={batch.image} alt={batch.name} className="course-image" />
                        <h2 className="course-name">{batch.name}</h2>

                        <div className="batch-info">
                          <PersonIcon style={{ color:'#1e7049',fontSize: '50px' }} />
                          <div className="batch-info-text-container">
                            <span className="batch-info-text"><b>Mode:</b>[online/offline]</span>
                            <span className="batch-info-text"><b>Trainer:</b>[name]</span>
                          </div>
                        </div>

                        <div className="batch-info">
                            <AccessTimeIcon style={{ color:'#1e7049'}}  />
                            <span className="batch-info-text"><b>Timings:</b>[0hrs]</span>
                        </div>

                 
                        <div className="batch-info">
                            <CalendarTodayIcon style={{ color:'#1e7049'}} />
                            <span className="batch-info-text"><b>Dates:</b>[dd/mm/yyyy]</span>
                        </div>
                    </div>
                ))}
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

export default NewBatches;
