import "./sidebar.scss"
import { Link } from "react-router-dom";



import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
// import {
//   DashboardIcon, PersonOutlinedIcon, StoreIcon
//   , CreditCardIcon, LocalShippingIcon, InsertChartIcon, NotificationsNoneIcon,
//   SettingsSystemDaydreamIcon, PsychologyOutlinedIcon,
//   SettingsApplicationsIcon, AccountCircleOutlinedIcon, LogoutIcon
// }
//   from '@mui/icons-material'




const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
      <Link to="/">
        <span className="logo">Abdo_Me</span>             
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
            <Link to="/">          
          <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
          </li>
            </Link>
          <p className="title">LISTS</p>
          <Link to="/users">
              
          <li>
            <PersonOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
            </Link>
            <Link to="/products">
              
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <Link to="/orders">
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          <Link to="/delivery">
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/ states">
          <li>
            <InsertChartIcon className="icon" />
            <span>States</span>
          </li>
          </Link>
          <Link to="/notifications">
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/">
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System health</span>
          </li>
          </Link>
          <Link to="/">
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          </Link>
          <Link to="/">
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/">
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/">
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default sidebar