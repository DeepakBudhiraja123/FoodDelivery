import React, { useContext, useEffect, useState } from 'react'
import "./Myorders.css"
import { StoreContext } from '../../context/storeContext';
import { assets } from '../../assets/assets';
import axios from "axios"
const Myorders = () => {

    const {url, token} = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async ()=>{
        const response = await axios.post(url + "/api/order/userorders", {}, {headers: {token}});
        setData(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    }, [token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order, index)=>{
                return (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        <div className="individual">
                        {order.items.map((item, index)=>{
                            return(
                            <div>
                                {item.name+" x "+item.quantity }
                            </div>
                            )
                        })}
                        </div>

                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={()=>fetchOrders()}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Myorders
