import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
export const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="exploreMenu" id="exploreMenu">
      <h1>Explore Our Menu</h1>
      <p className="exploreText">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience with our
        delecious meal.
      </p>
      <div className="exploreMenuList">
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=>{setCategory(prev=> prev === item.menu_name? "All":item.menu_name)}} key={index} className="exploreList">
                    <img className={category===item.menu_name? "active": ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>

      <hr />
    </div>
  );
};
