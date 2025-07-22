import React from 'react'
import jellyy from '../assets/jellyy.jpeg'
import { FaArrowUpLong } from "react-icons/fa6";

const GymContent = () => {
  return (
    <div className='gymdata'>
    <div className='gymImg-Container'>
        <img src={jellyy} alt='jellyy'></img>
    </div>
    <div className='gym-details'>
        <h5>Push Up</h5>
        <FaArrowUpLong className='arrowup'/>
    </div>

    </div>
  )
}

export default GymContent