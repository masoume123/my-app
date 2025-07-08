import React from 'react'
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import "../sideBar/sidebar.css"
import { Link } from 'react-router-dom';

export default function sidebar() {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <div className='sideBarMenu'>
          <h2 className='sideBarTitle'>Dashboard</h2>
          <ul className="sidebarDashbourd">
            <Link to="/" className='link'>
              <li className="sidebarDashLink ">
                <LineStyleIcon className='dashIcone' />
                Home
              </li>
            </Link>


            <li className="sidebarDashLink">
              <TrendingUpIcon className='dashIcone' />
              Analytics
            </li><li className="sidebarDashLink">
              <TimelineIcon className='dashIcone' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sideBarMenu'>
          <h2 className='sideBarTitle'>Quick Start</h2>
          <ul className="sidebarDashbourd link">
            <Link to="/users" className='link'><li className="sidebarDashLink ">
              <PermIdentityIcon className='dashIcone ' />
              Users
            </li></Link>
            <Link to="/newuser" className='link'><li className="sidebarDashLink">
              <PermIdentityIcon className='dashIcone' />
              New users
            </li></Link>


            <Link to="/products" className='link'><li className="sidebarDashLink">
              <StorefrontIcon className='dashIcone' />
              Products
            </li></Link>
            <li className="sidebarDashLink">
              <AttachMoneyIcon className='dashIcone' />
              Transaction
            </li>
            <li className="sidebarDashLink">
              <SignalCellularAltIcon className='dashIcone' />
              Report
            </li>
          </ul>
        </div>
        <div className='sideBarMenu'>
          <h2 className='sideBarTitle'>Notfications</h2>
          <ul className="sidebarDashbourd">
            <li className="sidebarDashLink">
              <MailOutlineIcon className='dashIcone' />
              Mail
            </li>
            <li className="sidebarDashLink">
              <DynamicFeedIcon className='dashIcone' />
              Feedback
            </li><li className="sidebarDashLink">
              <ChatBubbleOutlineIcon className='dashIcone' />
              Masseges
            </li>
          </ul>
        </div>
        <div className='sideBarMenu'>
          <h2 className='sideBarTitle'>Staff</h2>
          <ul className="sidebarDashbourd">
            <li className="sidebarDashLink">
              <WorkOutlineIcon className='dashIcone' />
              Manage
            </li>
            <li className="sidebarDashLink">
              <TrendingUpIcon className='dashIcone' />
              Analytics
            </li><li className="sidebarDashLink">
              <ReportIcon className='dashIcone' />
              Reports
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
