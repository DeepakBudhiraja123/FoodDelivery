import React, { useState } from 'react'
import "./List.css"
import axios from "axios";
import {toast} from 'react-toastify'
import { useEffect } from 'react';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("Error");
    }
  }

  const removeFood = async (foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`, {_id: foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error while deleting");
    }
  }

  useEffect(()=>{
    fetchList();
  }, [])
  return (
    <div className='list add flex-col'>
      <h3>All Food Items</h3>
      <div className='list-table'>

        {list.map((item, index)=>{
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <div className='content'>
              <p>{item.name}</p>
              <p>${item.price}</p>
              </div>
              <div className='content bordered'>
              <p>{item.category}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>x</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
