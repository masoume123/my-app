import React from "react";
import{Link, useParams} from "react-router-dom"
import"../product/product.css"
import Chart from "../../commponent/chart/Chart";
import {saleInMonth,products} from "../../data"
import { Key } from "@mui/icons-material";
export default function Product(){
    const id=useParams()
    // console.log(id)
    const productId=parseInt(id.productID)
    const showProduct=products.find((p)=> p.id===productId)
    console.log(showProduct)

    if (!showProduct){
        return(alert("not found"))
    }

    return(
        <div className="prContainer">
            <div className="productContainer">
                <h1 className="prHeder">{showProduct.product}</h1>
                <Link className="prLink">
                    <button className="prBtn">Create</button>
                </Link>
            </div>
            <div className="productInfo">
                <div className="infoLeft">
                    <Chart title="Monthly sale" data={saleInMonth}dataKey="sale"/>
                </div>
                <div className="infoRight">
                    <div className="infoRightHeader">
                        <img src={showProduct.img} alt="" className="infoRightImg"/>
                        <span className="infoRingtTitle">{showProduct.product}</span>
                    </div>
                    <div className="productDiscription">
                        <div className="disKey">ID:</div>
                        <div className="disValue">{showProduct.id}</div>
                    </div>
                    <div className="productDiscription">
                        <div className="disKey">Sale:</div>
                        <div className="disValue">{showProduct.price}</div>
                    </div>
                    <div className="productDiscription">
                        <div className="disKey">Active:</div>
                        <div className="disValue">{showProduct.status}</div>
                    </div>
                    <div className="productDiscription">
                        <div className="disKey">In Stock:</div>
                        <div className="disValue">yes</div>
                    </div>
                    

                </div>
            </div>

        </div>
            
    )
}