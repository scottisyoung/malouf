import React, { Component } from 'react';
import "./landing.css";

// Imported images for the landing page. 
import SupimaLogo from '../../images/icons-logos/supima-logo-white.png';
import WovenImage from '../../images/images/supima-intro-image.jpg';
import Linen1 from '../../images/images/supima-feel.png';
import Cotton from '../../images/images/supima-head.png';
import Linen2 from '../../images/images/supima-color.png';
import Seal from '../../images/icons-logos/supima-certified-seal.png';


class Landing extends Component {
    render() {
        return(
            <div>

{/* Main Header Section:  This is the section that has the flower background*/}

                <div className="bannersParent">
                    <div className="landingHeader">
                        <div className="headerTitleParent">
                            <div>
                                <img className="supimaLogo" src={SupimaLogo} alt="Supima Logo"/>  
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div>
                                <h5>THIS COTTON STOLE THE SHOW</h5>
                                <div className="headerParagraph">
                                Supima Cotton sheets were a big hit at this year's Vegas Market. This 100
                                percent American-grown extra-long staple cotton is a noticeable upgrade
                                with a premium, luxurious feel that customers love. We also introduced our
                                meticulously finished headboard line and expanded shoulder pillow offering.
                                </div>
                                <a href="#">
                                    <div className="showroom">View Showroom Recap &#8250;</div>
                                </a>
                            </div>
                        </div>
                    </div>

{/*Dark Background Strip:  This is the dark gray background strip section after the flower background*/}
                    
                    <div className="bg-dark-grey">
                        <div className="vegas">
                            <div>MISS US IN VEGAS?</div>
                        </div>
                        <div className="upcoming"><a className="upcoming" href="#">Other Upcoming Shows &#8250;</a></div>
                    </div>

{/*Product Section:  This is the white background section.*/}
        {/*Upper White Background:  This is the Woven Section.*/}

                    <div className="productBG">
                        <div className="wovenParent">
                            <div>
                                <div>
                                    <h2 className="wovenTitle">PREMIUM COTTON,  <br/>
                                                               LUXURIOUS SHEETS 
                                    </h2>
                                </div>
                                <div>
                                    <h5 className="wovenSubtitle">100% AMERICAN-GROWN <br/> 
                                                                  SUPIMA COTTON
                                    </h5>
                                </div>
                                <div className="btn">
                                    <div className="btn-black">VIEW PRODUCT</div>
                                </div>
                            </div>
                            <div>
                                <img className="wovenImg" src={WovenImage}/>
                            </div>
                        </div>
                    </div>

        {/*Lower White Background:  This is the section with the circular linen images.*/}

                    <div className="linenParent">
                        <div>
                            <img src={Linen1}/>
                        </div>
                        <div>
                            <img src={Cotton}/>
                        </div>
                        <div>
                            <img src={Linen2}/>   
                        </div>
                        <div>
                            <img src={Seal}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Landing;