import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
export default function NavBar({setShowLogin}) {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount , token , setToken, loadCartData} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = async ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
        await loadCartData("")
    }
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbarMenu">
            <Link to='/' onClick={()=>{
                setMenu("home")
            }} className={menu === "home" ? "active": ""}>Home</Link>
            <a href="#exploreMenu" onClick={()=>{
                setMenu("menu")
            }} className={menu === "menu"? "active" : ""}>Menu</a>
            <a href = "#appDownload" onClick={()=>{
                setMenu("mobile")
            }} className={menu === "mobile"? "active":""}>Mobile App</a>
            <a href="#footer" onClick={()=>{
                setMenu("contact")
            }} className={menu === "contact"? "active": ""}>Contact Us</a>
        </ul>

        <div className="navbarRight">
            <img src={assets.search_icon} alt="" />
            <div className="navbarSearchIcon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0? "": "dot"}></div>
            </div>
            {!token ? <button onClick={()=>{setShowLogin(true)}}>Sign In</button>: 
                <div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className='navbar-profile-dropdown'>
                        <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Log Out</p></li>
                    </ul>
                </div>
            }
        </div>
    </div>
  )
}
