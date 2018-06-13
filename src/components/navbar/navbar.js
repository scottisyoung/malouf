import React, {Component} from 'react';
import "./navbar.css";

//Imported icons used in the NavBar
import navLogo from "../../images/icons-logos/MaloufLogo.png";
import hMenu from "../../images/icons-logos/hamburger icon.png";



class Navbar extends Component {
    render() {
        return(
            <div>
                <div className="navBG">
                    <div>
                        <img className="hamburgerMenu" src={hMenu} alt="Hamburger Menu"/>
                        <img className="navLogo" src={navLogo} alt="Malouf Logo"/>
                    </div>
                    <div className="navMenuParent">
                        <div className="navMenu"><div>PRODUCTS</div></div>
                        <div className="navMenu"><div>WHOLESALE</div></div>
                        <div className="navMenu"><div>COMPANY</div></div>
                        <div className="navMenu"><div>SUPPORT</div></div>
                    </div>
                    <div>
                        <div className="shopCount"> 0 </div>
                        <i id="shop" className="fa fa-shopping-cart"></i>
                        <div className="divider"> | </div> 
                        <i id="lock" className="fa fa-lock">&ensp;Login</i>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Navbar;