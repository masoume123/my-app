import React from "react";
import{Link} from "react-router-dom"
import"../product/product.css"
import Chart from "../../commponent/chart/Chart";
import {saleInMonth} from "../../data"
export default function product(){
    return(
        <div className="prContainer">
            <div className="productContainer">
                <h1 className="prHeder">Product</h1>
                <Link className="prLink">
                    <button className="prBtn">Create</button>
                </Link>
            </div>
            <div className="productInfo">
                <div className="infoLeft">
                    <Chart title="Monthly sale" data={saleInMonth}dataKey="sale"/>
                </div>
                <div className="infoRight">
                    <img src="/img/tab.png" alt="" className="infoRightImg"/>tablet
                </div>
            </div>

        </div>
            
    )
}