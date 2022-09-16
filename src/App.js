
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ContactUs from './Pages/Home/ContactUs';
import Footer from './Pages/Home/Footer';
import Courses from './Pages/Courses/Courses';


function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
