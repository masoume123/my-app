import React, { useState } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { UserRow } from '../../data';
import "../users/Users.css"
import { width } from '@mui/system';
import { Link } from "react-router-dom"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function Users() {
  const deleteBtn=userId=>{
    setUserData(userData.filter(users=> users.id != userId ))
  }
  const[userData,setUserData]=useState(UserRow)
  const colums=[
    {
      field: 'id',
      headerName: 'ID',
      width: 200,
      
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell:(param)=>{
        return(
          <div className="listOfUsers">
            <img src={param.row.img} alt="" className='userListImg'/>
            {param.row.user}
            </div>
        )
        
      }
      },
      {
        field:"Email",
        headerName:"Email",
        width:200,
      },
      {
        field:"status",
        headerName:"Status",
        width:200,
      },
      {
        field:"transiction",
        headerName:"Transaction",
        width:200,

      },
      {
        field:"Action",
        headerName:"Action",
        width:200,
        renderCell:(param)=>{
            return(
              <div className='activeCell'>
                <Link to={`/users/ ${param.row.id}`}>
                    <button className='actionBtn'>Edit</button>
                </Link>
                <DeleteOutlineIcon sx={{ color:"red" }} onClick={()=>deleteBtn(param.row.id)}></DeleteOutlineIcon>
                  
                
              </div>
              
            )
        }
      }
      
    
  ]
  return (
    <div className='users'>
      <DataGrid
       rows={userData}
       columns={colums}
       pageSize={2}
       />
    </div>
  )
}
