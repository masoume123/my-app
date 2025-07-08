import React from 'react'
import Features from '../../commponent/features/Features'
import Chart from '../../commponent/chart/Chart'
import { xAxisData } from '../../data'
import "./Home.css"
import WidgetSm from '../../commponent/widget/widgetSm/WidgetSm'
import WidgetLg from '../../commponent/widget/widgetLg/widgetLg'


export default function Home() {
  return (
        <div className="home">
            <Features/>
            <Chart grid title="Month sale" data={xAxisData}dataKey="sale"/>
            <div className="homeWidget">
                  <WidgetSm className="widgetsm"/>
                  <WidgetLg className="widgetlg"/>
            </div>
            
        </div>
       
    
  )
}
