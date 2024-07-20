import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext';
const FoodItem = ({id, name, price, desc, image}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='foodItem'>
        <div className="imgContainer">
            <img className='foodItemImage' src={url+"/images/"+ image} alt="" />
            {
              !cartItems[id] ? <img className='add' onClick={()=>{
                addToCart(id)
              }} src = {assets.add_icon_white}/>:
              <div className='foodItemCount'>
                <img onClick={()=>{
                  removeFromCart(id)
                }} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>{
                  addToCart(id)
                }} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="foodItemInfo">
            <div className="foodItemNameRating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>

            <p className="foodItemDesc">{desc}</p>

            <p className='foodItemPrice'>${price}</p>


        </div>
    </div>
  )
}

export default FoodItem
