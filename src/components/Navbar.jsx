import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
   const navigate =useNavigate();


  return (
    <>
  
    <div class="navbar">
    <ul>
        <li class="navlist appTitle">BugTracker</li>
        <button class="navlist navbtn" onClick={()=>navigate('/')}>Home</button>
        <button class="navlist navbtn" onClick={()=>navigate('/createproject')}>Create Project</button>
        <button class="navlist navbtn" onClick={()=>navigate('/project')}>Open Project</button>
        <button class="navlist navbtn" onClick={()=>navigate('/login')}>Login</button>
        <button class="navlist navbtn" onClick={()=>navigate('/signin')}>Sign In</button>
        <button class="navlist navbtn" onClick={()=>navigate('/profile')}>View Profile</button>
    </ul>

    </div>

    


        



    </>
  )
}
