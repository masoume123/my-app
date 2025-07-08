import React from 'react'
import "./Features.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Features() {
  return (
    <div className='features'>
        <div className="featuresItems">
            <div className="featuresTitle">Revenue</div>
            <div className="featureProfit">
                <span className='featureMoney'>$2,415</span>
                <div className="featureIcons">
                    <span className="fetureProfitPercend">-11.4</span>
                    <ArrowDownwardIcon className='featureIcon'/>
                </div>
                
            </div>
            <p className="fetureDetail">Compare to last month</p>


        </div>
        <div className="featuresItems">
            <div className="featuresTitle">Revenue</div>
            <div className="featureProfit">
                <span className='featureMoney'>$2,415</span>
                <div className="featureIcons">
                    <span className="fetureProfitPercend">-11.4</span>
                    <ArrowDownwardIcon className='featureIcon'/>
                </div>
                
            </div>
            <p className="fetureDetail">Compare to last month</p>
            </div>
            <div className="featuresItems">
            <div className="featuresTitle">Revenue</div>
            <div className="featureProfit">
                <span className='featureMoney'>$2,415</span>
                <div className="featureIcons">
                    <span className="fetureProfitPercend">-11.4</span>
                    <ArrowDownwardIcon className='featureIcon'/>
                </div>
                
            </div>
            <p className="fetureDetail">Compare to last month</p>


        </div>
      
    </div>
  )
}
