import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CreateProjectForm from './components/CreateProjectForm'
import Project from './components/Project'
import Login from './components/Login'
import Signin from './components/Signin'
import Profile from './components/Profile'
import Logged from './components/Logged';

function App() {
  return (
    
    
   
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>   
          <Route path="login" element={<Login/>}/>
          <Route path='logged' element={<Logged/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="createproject" element={<CreateProjectForm/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    
 

  );
}

export default App;
