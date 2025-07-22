import React from 'react'
import { FaPlus } from "react-icons/fa6";
import Sidenavbar from './Sidenavbar'

const MyGoal = () => {
  return (
    <div className='content-main-page'>
      <Sidenavbar />
      <div className='mygoal-content-container'>
        <div className='mygoal-btnWrapper'>
          <h4 className='addGoalBtn addBtn'> <FaPlus className='plus-icon'/>Add New Goal</h4>
        </div>
      <div className='mygoal-pushdata'>
        <div className='mygoal-content'>
          <h5>Loss 4kg</h5>
          <div className='mygoal-progressBar'>
            <span className='progressbar-Eighty'></span>
            <span className='progressbar-data'>80%</span>
          </div>
        </div>

        <div className='mygoal-content'>
          <h5>Run 2 km per week</h5>
          <div className='mygoal-progressBar'>
            <span className='progressbar-Sixty'></span>
            <span className='progressbar-data'>60%</span>
          </div>
        </div>

         <div className='mygoal-content'>
          <h5>Belly Loss</h5>
          <div className='mygoal-progressBar'>
            <span className='progressbar-Fourty'></span>
            <span className='progressbar-data'>40%</span>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default MyGoal