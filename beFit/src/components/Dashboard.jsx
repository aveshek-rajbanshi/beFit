import React from 'react'
import {Chart as ChartJS , LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Legend,Title, defaults,} from 'chart.js'
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);
import {Line} from 'react-chartjs-2'
import Sidenavbar from './Sidenavbar'
import chartData from '../chartData/walkdata'

const Dashboard = () => {
  return (
    <div className='content-main-page'>
        <Sidenavbar />
        <div className='dashboard-content-container'>
        <div className='progress-LineChart'>
         <Line data={{
                       labels: chartData.map((chartInfo) => chartInfo.month),
                       datasets: [
                                  {
                                    label: "Walk Steps",
                                    data: chartData.map((chartInfo) => chartInfo.runsteps),
                                    backgroundColor: "#d40101ff",
                                    borderColor: "#d40101ff",
                                  },
                                 ],
                    }}

                      options={{
                                 responsive: true,
                                 maintainAspectRatio: false,
                                 elements: {
                                  line:{
                                    tension: 0.5,
                                  },
                                 },
                                 plugins:{
                                  title:{
                                    display: true,
                                    text: "Monthly Walk",
                                    align: "start",
                                    font: {
                                      size: 20,
                                    },
                                    color: "black",
                                  },
                                 },
                              }}
        />
        </div>
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
          <div className='physical-InfoContainer'>
            <h4>Task Status</h4>
            <h1>6/8<span></span></h1>
          </div>
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