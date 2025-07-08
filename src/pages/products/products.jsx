import React, { useState } from 'react'
import { product } from '../../data'
import { DataGrid } from '@mui/x-data-grid'
import "../products/products.css"
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function products() {
  const [productData,setProductData]=useState(product)
  const deleteProduct=(productID)=>{
          setProductData(productData.filter(product=>(product.id!=productID)))
  }
  const columns=[
    {
      field:"id",
      headerfield:"ID",
      width:200
    },
    {
      field:"product",
      headerfield:"Product",
      width:200,
      renderCell:(params)=>{
        return(
          <div className='productList'>
            <img src={params.row.img} alt="" className='productImg' />{params.row.product}</div>
        )
      }
    },
    {
      field:"stock",
      headerfield:"Stock",
      width:200,

    },
    {
      field:"status",
      headerfield:"Status",
      width:200
    },
    {
      field:"price",
      headerfield:"Price",
      width:200
    },
    {
      field:"action",
      headerfield:"Action",
      width:200,
      renderCell:(param)=>{
          return(
            <div className='actionCell'>
              <Link to={`/product/${param.row.id}`}>
                <button className='actionBtn'>Edit</button>
              </Link>
              <DeleteOutlineIcon className='actionicon' onClick={()=>deleteProduct(param.row.id)} />
            </div>
          )
      }
    },
  ]
  return (
    <div className='productTable'>
      <DataGrid 
      rows={productData}
      columns={columns}
      />
    </div>
  )
}
