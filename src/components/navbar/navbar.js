import React, {Component} from 'react';
import "./navbar.css";

//Imported icons used in the NavBar

class Navbar extends Component {
    render() {
        return(
            <div>
                <div className="navBG">
                    <div>
                        <img className="hamburgerMenu" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018365/Malouf/resized%20images/hamburger_icon.png' alt="Hamburger Menu"/>
                        <img className="navLogo" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018368/Malouf/resized%20images/MaloufLogo.png' alt="Malouf Logo"/>
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
                        <i id="lock" className="fa fa-lock"></i><div className="lock">Login</div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Navbar;