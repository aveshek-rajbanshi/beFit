import React from 'react'
import Sidenavbar from './Sidenavbar'

const Dashboard = () => {
  return (
    <div className='content-main-page'>
        <Sidenavbar />
        <div className='dashboard-content-container'>
        <div className='progress-LineChart'></div>
        <div className='physicalActivity-wrapper'>
        <div className='physical-left'>
          <div className='physical-InfoContainer'>
            <h4>Heart Beats</h4>
            <h1>82 <span>Times</span></h1>
          </div>
          <div className='physical-InfoContainer'>
            <h4>Calories</h4>
            <h1>2000 <span>kcal</span></h1>
          </div>
          <div className='physical-InfoContainer'>
            <h4>Walk</h4>
            <h1>690 <span>Steps</span></h1>
          </div>
          <div className='physical-InfoContainer'></div>
          <div className='physical-InfoContainer'></div>
          <div className='physical-InfoContainer'></div>
        </div>
        <div className='physical-right'>
          <h2>Activities Summery:</h2>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Dashboard