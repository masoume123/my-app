import React from 'react'
import "../widgetSm/widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newUsers } from '../../../data';

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
        <span className='widgetTitle'>New Join Members</span>
        <ul className='widgetWapper'>
            {newUsers.map((user)=>(
                <li key={user.id}className='widgetLi'>
                <img src={user.img} alt="" className='widgetImg'/>
                <div className='widgetInfo'>
                    <span className='widgetName'>{user.name}</span>
                    <span className='widgetPosition'>{user.position}</span>
                </div>
                <button className='widgetBtn'>
                    <VisibilityIcon className='widgetIcon'/> Display
                </button>
            </li>
            ))}
            
            
            
            
        </ul>
    </div>
    
    )
}
