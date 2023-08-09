import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CreateProjectForm from './components/CreateProjectForm'
import Project from './components/Project'
import Login from './components/Login'
import Signin from './components/Signin'
import Profile from './components/Profile'
import Logged from './components/Logged';
import OpenProject from './components/OpenProject';
import Landing from './components/Landing'
import Demo from './components/Demo';
import About from './components/About';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Landing/>}> 
          
          <Route index="home" element={<Home/>}/>
          <Route path="home" element ={<Home/>}/>
           
          <Route path="profile" element={<Profile/>}/>
          <Route path ="project" element={<Project/>}/>
          <Route path ="demo" element={<Demo/>}/>
          <Route path="about" element={<About/>}/>      
      

          
        </Route>
      </Routes>
    </BrowserRouter>
     

  );
}

export default App;
