import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import './pageDecor.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'
import MyGoal from './components/MyGoal.jsx'
import Schedule from './components/Schedule.jsx'
import Notification from './components/Notification.jsx'
import Content from './components/Content.jsx'
import Setting from './components/Setting.jsx'

const router = createBrowserRouter([
   {
    path: '/',
    element: <App />,
   },
   {
    path: '/home',
    element: <Home />,
   },
   {
    path: '/dashboard',
    element: <Dashboard />, 
   },
    {
    path: '/mygoal',
    element: <MyGoal />,
   },
   {
    path: '/schedule',
    element: <Schedule />, 
   },
   {
    path: '/notification',
    element: <Notification />,
   },
   {
    path: '/content',
    element: <Content />,
   },
   {
    path: '/setting',
    element: <Setting />,
   },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);







// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
