import React from 'react'
import jellyy from '../assets/jellyy.jpeg'
import { FaArrowUpLong } from "react-icons/fa6";

const GymContent = (Props) => {
  const {image, title} = Props.exerciseData;
  return (
    <div className='gymdata'>
    <div className='gymImg-Container'>
        <img src={image} alt='{title}'></img>
    </div>
    <div className='gym-details'>
        <h5>{title}</h5>
        <FaArrowUpLong className='arrowup'/>
    </div>

    </div>
  )
}

export default GymContent