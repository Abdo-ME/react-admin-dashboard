import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {
  const { dispatch,darkMode } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item" onClick={()=>dispatch({type: "TOGGLE"})}>
            {darkMode?<LightModeIcon  className="icon"/>: <DarkModeOutlinedIcon className="icon"/>}
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
        
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <span className="counter">1</span>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <span className="counter">20</span>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img className="avatar" src="https://images.pexels.com/photos/3182751/pexels-photo-3182751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar