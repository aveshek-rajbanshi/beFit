import React from 'react'
import Sidenavbar from './Sidenavbar';
import exerciseDetails from '../DataContainer/exerciseContent';
import GymContent from './GymContent';
import { CgGym } from "react-icons/cg";

const Content = () => {
  return (
    <div className='gym-wrapper'>
    <Sidenavbar />
    <div className='gymContainer'>
      <div className='blankSpace'>
        <div className='dumbleIcon-container'>
         <div className='dumbleIcon-content'>
          <CgGym className='dumble'/>
          <h2>8 Exercise</h2>
          <h6>1 hours 30 minutes</h6>
         </div>
        </div>
        <div className='step-dataset'>
         <span>6/8</span>
        </div>
      </div>
      <div className='gymDataContainer'>

        {exerciseDetails.map((Data, index)=>(             //for returning map i used () instead of {}
          <GymContent key={index} exerciseData={Data} />
        ))}
        
      </div>

    </div>
    </div>
  )
}

export default Content