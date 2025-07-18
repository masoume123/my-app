import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,CartesianGrid,Tooltip}from "recharts"
import "./Chart.css"

export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"></XAxis>
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
            <Tooltip />
            {grid && <CartesianGrid strok="#e0dfdf" strokeDasharrey='10'/>}

        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
