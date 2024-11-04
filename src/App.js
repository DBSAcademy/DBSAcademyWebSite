import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Courses from './Components/Pages/Courses';
import NewBatches from './Components/Pages/NewBatches';
import Blogs from './Components/Pages/Blogs';
import ContactUs from './Components/Pages/ContactUs';
import Navbar from './Navbar';
import Carousel from './Components/Carousel'; 
import './Navbar.css';
import './Components/Pages/Home.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import aboutUsImage from './Components/Images/aboutUs.png';
import coursesImage from './Components/Images/courses.jpg'; 
import newBatchesImage from './Components/Images/newBatches.jpg'; 
import blogsImage from './Components/Images/blogs.jpeg'; 
import contactUsImage from './Components/Images/contactUs.jpg';
import AIImage from './Components/Images/Course_page_images/AI.jpg' 
import DataScienceImage from './Components/Images/Course_page_images/DataScience.jpg' 
import CloudComputingImage from './Components/Images/Course_page_images/CloudComputing.jpg' 
import DevOpsImage from './Components/Images/Course_page_images/DevOps.jpg' 
import JavaImage from './Components/Images/Course_page_images/Java.jpg' 
import PythonImage from './Components/Images/Course_page_images/Python.jpg' 
import JavaFullStackImage from './Components/Images/Course_page_images/JavaFullStack.jpg' 
import PythonFullStackImage from './Components/Images/Course_page_images/PythonFullStack.webp' 
import MernFullStackImage from './Components/Images/Course_page_images/MernFullStack.jpg' 
import DotNetImage from './Components/Images/Course_page_images/DotNet.jpg' 
import SQLImage from './Components/Images/Course_page_images/SQL.jpg' 
import SalesForceImage from './Components/Images/Courses/Salesforce.png' 
import DataAnalysisImage from './Components/Images/Course_page_images/Data-Analysis.jpg' 
import TestingImage from './Components/Images/Course_page_images/Testing.jpg' 

import AI from './Components/Courses/AI';
import DataScience from './Components/Courses/DataScience';
import CloudComputiong from './Components/Courses/CloudComputing';
import DevOps from './Components/Courses/DevOps';
import Java from './Components/Courses/Java';
import Python from './Components/Courses/Python';
import JavaFullStack from './Components/Courses/JavaFullStack'
import PythonFullStack from './Components/Courses/PyhtonFullStack'
import MernFullStack from './Components/Courses/MernFullStack'
import DotNet from './Components/Courses/DotNet'
import SQL from './Components/Courses/SQL'
import SalesForce from './Components/Courses/SalesForce'
import DataAnalysis from './Components/Courses/DataAnalysis'
import Testing from './Components/Courses/Testing'
import Footer from './Components/Footer';
function App() {
  const location = useLocation();


  const getImageForRoute = () => {
    switch (location.pathname) {
      case '/AboutUs':
        return aboutUsImage;
      case '/Courses':
        return coursesImage;
      case '/NewBatches':
        return newBatchesImage;
      case '/Blogs':
        return blogsImage;
      case '/ContactUs':
        return contactUsImage;
      case '/AI':
          return AIImage;
      case '/DataScience':
          return DataScienceImage;
      case '/CloudComputing':
          return CloudComputingImage;
      case '/DevOps':
            return DevOpsImage;
      case '/Java':
            return JavaImage;
      case '/Python':
          return PythonImage;
      case '/JavaFullStack':
          return JavaFullStackImage; 
      case '/PythonFullStack':
          return PythonFullStackImage; 
      case '/MernFullStack':
          return MernFullStackImage; 
      case '/DotNet':
            return DotNetImage; 
      case '/SQL':
            return SQLImage;
      case '/SalesForce':
            return SalesForceImage;
      case '/DataAnalysis':
            return DataAnalysisImage; 
      case '/Testing':
            return TestingImage;   
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar className="navbar" />
      {location.pathname === "/" || location.pathname === "/Home" ? (
        <div className="carousel-container">
          <Carousel />
        </div>
      ) : (
        <div className="image-container">
          <img src={getImageForRoute()} alt="Page representation" className="page-image" />
        </div>
      )}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/NewBatches" element={<NewBatches />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AI" element={<AI />} />
          <Route path="/DataScience" element={<DataScience />} />
          <Route path="/CloudComputing" element={<CloudComputiong />} />
          <Route path="/Devops" element={<DevOps />} />
          <Route path="/Java" element={<Java/>} />
          <Route path="/Python" element={<Python/>} />
          <Route path="/JavaFullStack" element={<JavaFullStack />} />
          <Route path="/PythonFullStack" element={<PythonFullStack />} />
          <Route path="/MernFullstack" element={<MernFullStack />} />
          <Route path="/DotNet" element={<DotNet />} />
          <Route path="/SQL" element={<SQL />} />
          <Route path="/SalesForce" element={<SalesForce />} />
          <Route path="/DataAnalysis" element={<DataAnalysis/>} />
          <Route path="/Testing" element={<Testing />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

