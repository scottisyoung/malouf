import React, { Component } from 'react';
import "./landing.css";

// Images
import SupimaLogo from '../../images/icons-logos/supima-logo-white.png';


class Landing extends Component {
    render() {
        return(
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
                <div className="bg-dark-grey">
                    <div className="vegas">
                        <div>MISS US IN VEGAS?</div>
                    </div>
                    <div className="upcoming"><a className="upcoming" href="#">Other Upcoming Shows &#8250;</a></div>
                </div>
                <div className="productBG">

                </div>
            </div>
        )
    }
}

export default Landing;