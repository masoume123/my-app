import React from 'react'
import "../widgetLg/widgetLg.css"
import {transaction} from "../../../data"
export default function widgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgBtn "+ type }>{type}</button>;
    }
    return (
    <div>
        <div className='widgetLg'>
            <span className='widgetTitle'>Last transaction</span>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Staus</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map((transaction)=>(
                        <tr key={transaction.id}className="widgetLgTr">
                                <td className="widgetLgUser">
                                    <img src="img/npm.png" alt="" className='widgetLgImg'/>
                                    <span>{transaction.customer}</span>
                                </td>
                            <td className="widgetLgDate">{transaction.date}</td>
                            <td className="widgetLgYear">{transaction.amount}</td>
                            <td className="">
                                <Button type={transaction.status}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
    )
}
