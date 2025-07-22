
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <div className='main'>
      <Outlet />
      <Home />
    </div>
  )
}

export default App
