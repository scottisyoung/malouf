import React, { Component } from 'react';
import "./landing.css";

// Imported images for the landing page. 
import SupimaLogo from '../../images/icons-logos/supima-logo-white.png';
import WovenImage from '../../images/images/supima-intro-image.jpg';
import Linen1 from '../../images/images/supima-feel.png';
import Cotton from '../../images/images/supima-head.png';
import Linen2 from '../../images/images/supima-color.png';
import Seal from '../../images/icons-logos/supima-certified-seal.png';
import year from '../../images/icons-logos/5-year-warranty.png';
import videoThumb from '../../images/images/video-thumbnail.jpg';
import Play from '../../images/icons-logos/play-button.png';
import Field from '../../images/images/supima-field-footer-bwfade.png';


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
                    
                    <div className="dark-grey">
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
                    

        {/*Lower White Background:  This is the section with the circular linen images.*/}

                        <div className="linenParent">
                            <div>
                                <img className="linenImgs" src={Linen1}/>
                            </div>
                            <div>
                                <img className="warranty" src={year}/>
                                <img className="linenImgs" src={Cotton}/>
                            </div>
                            <div>
                                <img className="linenImgs" src={Linen2}/>   
                            </div>
                            <div>
                                <img className="linenImgs" src={Seal}/>
                            </div>
                        </div>

                        <div className="titleParent">
                            <div className="linensTitle">
                                LUXURIOUS FEEL
                            </div>
                            <div className="linensTitle">
                                SUPERIOR STRENGTH
                            </div>
                            <div className="linensTitle">
                                BEAUTIFUL COLOR
                            </div>
                            <div className="linensTitle">
                                PROTECTED FIBER
                            </div>
                        </div>

                        <div className="paragraphParent">
                            <div className="linenParagraphs">
                                This superior extra-long staple cotton is
                                100 percent American grown. The fibers
                                are an impressive 35 percent longer than
                                upland cotton and produce smoother,
                                softer yarns. The result is luxurious 
                                sateen sheets with an elegant drape.
                            </div>
                            <div className="linenParagraphs">
                                Twice as strong as regular cotton,
                                Supima cotton resists pilling, breaking,
                                and tearing. Backed by our industry-
                                leading 5-year warranty, this resilient
                                fiber lasts longer than regular cotton and 
                                keeps its brilliance through years of 
                                washing.
                            </div>
                            <div className="linenParagraphs">
                                Supima cotton is finely woven and
                                mercerized to create fabric that is softer
                                and more vibrantly colored. Enjoy our 
                                elegant color palatte of White, Smoke,
                                Flax, and Charcoal for truly luxurious
                                sheeting that customers covet.
                            </div>
                            <div className="linenParagraphs">
                                Supima<sup><i id="trademark" class="fa fa-registered"></i></sup> is the trademark used to
                                promote American-grown, extra-long
                                staple cotton. To bear the Supima
                                trademark, products must be sourced
                                through a licensed supply chain. This 
                                process protects buyers from false
                                advertising. 
                            </div>
                        </div>

                        <div>
                            <a className="learnMore" href="#">Learn More About Supima &#8250;</a>
                        </div>

                        <div className="videoParent">
                            <img className="videoThumb" src={videoThumb}/>
                            <img className="play" src={Play}/>
                        </div>
                    </div>

{/*Pillow Line Section:  This is the section with the light grey background*/}

                    <div className="bg-light-grey">
                        <img className="field" src={Field}/>




                    </div>
                </div>


                <div className="bg-dark-grey">

                </div>



            </div>
        )
    }
}

export default Landing;