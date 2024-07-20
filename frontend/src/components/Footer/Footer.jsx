import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="FooterLeft">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            consequatur fugit soluta officiis, fuga quibusdam, sapiente,
            architecto ipsa neque facilis facere maiores minima reprehenderit a
            alias voluptas. Ex, doloremque cumque.
          </p>
          <div className="footerSocial">
            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="FooterCenter"> 
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privay policy</li>
            </ul>
        </div>
        <div className="FooterRight"> 
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyRight">Copyright 2024 &copy; Tomato.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
