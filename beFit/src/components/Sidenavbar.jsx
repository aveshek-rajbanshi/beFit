import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/befit.png';
import profileImage from '../assets/jellyy.jpeg'

const Sidenavbar = () => {
  return (
    <div className='sidenavbar'>
        <div className='logo-container'>
          <img src={logo} alt="gym-logo"></img>
        </div>
        <div className='menuBar-container'>
           <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/mygoal">My Goal</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/notification">Notification</Link></li>
            <li><Link to="/content">Exercise</Link></li>
            <li><Link to="/setting">Setting</Link></li>
           </ul>
        </div>
        <div className='details-container'>
         <div className='profile-pic'>
            <img src={profileImage} alt='profileImage'></img>
         </div>
         <h4>Aveshek Rajbanshi</h4>
         <h6>aveshrajbanshi@gmail.com</h6>
        </div>
    </div>
  )
}

export default Sidenavbar