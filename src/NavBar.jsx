import React from "react";
import noon from "./assets/noon-logo-en.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import dubaiimg from "./assets/dubai.png"
import { faHeart } from "@fortawesome/free-regular-svg-icons";
function NavBar() {
  return (
    <>
      <div className="Navbar-top">
        <img src={noon} className="img-set" alt="" />
        <img src={dubaiimg} className="dubai-img" alt="" />
        <div className="deliver">
        <i class="fa-solid fa-angles-down"></i>
        <h4>Deliver to <span>Dubai</span></h4>
       
        </div>
        
        <input className="inp" placeholder="What are you looking for?" type="text" />
        <div>
          <ul className="ul-div">
            <li>Login <FontAwesomeIcon icon={faUserPlus} /> </li> 
            <span className="line"></span>
            <li>WishList <FontAwesomeIcon icon={faHeart}/></li>
            <span className="line"></span>
            <li>Cart <FontAwesomeIcon icon={faOpencart} /></li>
          </ul>
        </div>
      </div>
      <div className="main-sec">
        <div >

       
        <ul className="ul-2div">
          <li>ALL CATEGORIES  <FontAwesomeIcon icon={faCaretDown}  className="arrow-set"/> </li>
          <li> ELECTRONICS</li>
          <li>MEN'S FASHION</li>
          <li>WOMEN'S FASHION</li>
          <li>HOME</li>
          <li>BEAUTY & FRAGRANCE</li>
          <li>BABY</li>
          <li>TOYS</li>
          <li>SPORT </li>
          <li>FC </li>
          
        </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;
