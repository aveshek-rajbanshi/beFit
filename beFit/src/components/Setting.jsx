import { IoPersonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Sidenavbar from './Sidenavbar'

const Setting = () => {
  return (
    <div className='content-main-page'>
      <Sidenavbar />
      <div className='setting-content-container'>
        <div className='setting-menu-wrapper'>
          <ul>
            <li> <IoPersonOutline className="setting-icon" /> <span>Profile Info</span></li>
            <li> <IoMdNotificationsOutline className="setting-icon" /> <span>Notification Setting</span></li>
            <li> <LuDatabaseBackup className="setting-icon" /> <span>Data Backup</span></li>
            <li> <MdDeleteOutline className="setting-icon" /> <span>Deactivate Account</span></li>
            <li> <MdLogout className="setting-icon" /> <span>Logout</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Setting