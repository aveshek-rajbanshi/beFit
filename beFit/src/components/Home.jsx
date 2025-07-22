import React from 'react'
import Sidenavbar from './Sidenavbar'

const Home = () => {
  return (
    <div className='content-main-page'>
    <Sidenavbar />
        <div className='home-content-container'>
        <div className='welcome-msg'>
          <h1>Welcome Back!</h1>
        </div>
        <div className='progress-wrapper'>
          <div className='progress-value'>
            <p>You've achieved <br></br><span>60%  </span>of <br></br> Your weekly goals.</p>
          </div>
          <div className='motivate-msg'>
            <p>Push yourself<br></br>because no one else is going to do it for you.</p>
          </div>

        </div>
        </div>
    </div>
  )
}

export default Home