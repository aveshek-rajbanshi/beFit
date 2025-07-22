import React from 'react'
import { FaPlus } from "react-icons/fa6";
import Sidenavbar from './Sidenavbar'

const Schedule = () => {
  return (
    <div className='content-main-page'>
      <Sidenavbar />
      <div className='schedule-content-container'>
        <div className='schedule-btnWrapper'>
          <h4 className='addBtn'> <FaPlus className='plus-icon'/>Add New Schedule</h4>
        </div>
      </div>
    </div>
  )
}

export default Schedule