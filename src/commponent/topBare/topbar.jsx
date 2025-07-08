import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="top-bar-wrapper">
        <div className="top-bar-left">
          <div className="logo">learning</div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-icons">
            <NotificationsIcon/>
            <span className='topBarBadge'>2</span>
          </div>
          <div className="top-bar-icons">
            <LanguageIcon/>
            <span className='topBarBadge'>3</span>
          </div>
          <div className="top-bar-icons">
            <img src="./img/npm.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
