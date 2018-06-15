import React, { Component } from 'react';
import "./landing.css";

// Import the Modal Component for the Video

import Modal from '../modal/modal.js';

let landingModal = null;


class Landing extends Component {

        constructor(props) {
            super(props) 
              this.state = {
                   show: false,
                   isReady: landingModal !== null   
              }
            }

        componentDidMount() {
            require.ensure('./landing.js', () => {
                landingModal = require('./landing.js').default;
                if (!this.hasUnmounted) {
                    this.setState({ isReady: true });
                }
            });
        }

        componentWillUnmount() {
            this.hasUnmounted = true;
        }


        showModal = () => {
            this.setState({
            ...this.state, 
            show: !this.state.show
            });
        }


    render() {


        return(
            <div>

{/* Main Header Section:  This is the section that has the flower background*/}

                <div className="bannersParent">
                    <div className="landingHeader">
                        <div className="headerTitleParent">
                            <div>
                                <img className="supimaLogo" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018378/Malouf/resized%20images/supima-logo-white.png' alt="Supima Logo"/>  
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
                                <a href="">
                                    <div className="showroom1">View Showroom Recap &#8250;</div>
                                </a>
                            </div>
                        </div>
                    </div>

{/*Dark Background Strip:  This is the dark gray background strip section after the flower background*/}
                    
                    <div className="dark-grey">
                        <div className="vegas">
                            <div>MISS US IN VEGAS?</div>
                        </div>
                        <div className="upcoming"><a className="upcoming" href="" >Other Upcoming Shows &#8250;</a></div>
                    </div>

{/*Product Section:  This is the white background section.*/}
        {/*Upper White Background:  This is the Woven Section.*/}

                    <div className="productBG">
                        <div className="wovenParent">
                            <div>
                                <div className="wovenCenterTitle">
                                    <h2 className="wovenTitle">PREMIUM COTTON,  <br/>
                                                               LUXURIOUS SHEETS 
                                    </h2>
                                </div>
                                <div className="wovenCenterSubtitle">
                                    <div className="wovenSubtitle"> 100% AMERICAN-GROWN </div>  
                                    <div className="wovenSubtitle2"> SUPIMA COTTON</div>                      
                                </div>
                                <div className="wovenCenterBtn">
                                    <div className="btn">
                                        <div className="btn-black">VIEW PRODUCT</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="wovenImg" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018377/Malouf/resized%20images/supima-intro-image.jpg' alt="Woven Cotton Blanket"/>
                            </div>
                        </div>
                    

        {/*Lower White Background:  This is the section with the circular linen images.*/}

                        <div className="linenParent">
                            <div>
                                <img className="linenImgs" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018373/Malouf/resized%20images/supima-feel.png' alt="Multiple Luxurious Sheets"/>
                                <div className="linensTitle"> LUXURIOUS FEEL </div>
                                <div className="linenParagraphs">
                                This superior extra-long staple cotton is
                                100 percent American grown. The fibers
                                are an impressive 35 percent longer than
                                upland cotton and produce smoother,
                                softer yarns. The result is luxurious 
                                sateen sheets with an elegant drape.
                            </div>
                            </div>
                            <div>
                                <img className="warranty" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018361/Malouf/resized%20images/5-year-warranty.png' alt="5 Year Warrenty Seal"/>
                                <img className="linenImgs" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018376/Malouf/resized%20images/supima-head.png' alt="Fresh Cotton"/>
                                <div className="linensTitle"> SUPERIOR STRENGTH </div>
                                <div className="linenParagraphs">
                                Twice as strong as regular cotton,
                                Supima cotton resists pilling, breaking,
                                and tearing. Backed by our industry-
                                leading 5-year warranty, this resilient
                                fiber lasts longer than regular cotton and 
                                keeps its brilliance through years of 
                                washing.
                            </div>
                            </div>
                            <div>
                                <img className="linenImgs" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018372/Malouf/resized%20images/supima-color.png' alt="Beautiful Colored Sheets"/>
                                <div className="linensTitle"> BEAUTIFUL COLOR </div>
                                <div className="linenParagraphs">
                                Supima cotton is finely woven and
                                mercerized to create fabric that is softer
                                and more vibrantly colored. Enjoy our 
                                elegant color palatte of White, Smoke,
                                Flax, and Charcoal for truly luxurious
                                sheeting that customers covet.
                            </div>   
                            </div>
                            <div>
                                <img className="linenImgs" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018371/Malouf/resized%20images/supima-certified-seal.png' alt="Protected Fiber"/>
                                <div className="linensTitle"> PROTECTED FIBER </div>
                                <div className="linenParagraphs">
                                Supima<sup><i id="trademark" className="far fa-registered"></i></sup> is the trademark used to
                                promote American-grown, extra-long
                                staple cotton. To bear the Supima
                                trademark, products must be sourced
                                through a licensed supply chain. This 
                                process protects buyers from false
                                advertising. 
                            </div>
                            </div>
                        </div>

                        <div>
                            <a className="learnMore" href="">Learn More About Supima &#8250;</a>
                        </div>

{/* This is the Section for the Video Modal*/}

                        <div className="videoParent">
                            <img className="videoThumb" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018379/Malouf/resized%20images/video-thumbnail.jpg' alt="Cotton Video"/>
                            <div className="play"
                                 type="button" 
                                 onClick={this.showModal} 
                                 value="Show Modal">

                                <img className="play" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018369/Malouf/resized%20images/play-button.png' alt="Play Button"/>
                            </div>

                            <Modal show={this.state.show}
                                   onClose={this.showModal}>

                                <div className="modalVideoParent">
                                    <div>
                                        <iframe src="https://player.vimeo.com/video/226979747?title=0&byline=0&portrait=0"
                                            title="Malouf Sheets" 
                                            width="940" height="367" 
                                            frameBorder="0" 
                                            webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true">
                                        </iframe>
                                        <div className="videoDescription">
                                            <a className="videoDef" href="https://vimeo.com/226979747"> Woven&trade; Supima&reg; Premium Cotton Sheets</a>
                                            <div className="videoDef"> from &nbsp; 
                                                <a className="videoDef" href="https://vimeo.com/malouf">&nbsp;Malouf &nbsp; </a> on &nbsp; 
                                                <a href="https://vimeo.com">Vimeo</a>.
                                            </div> 
                                        </div>
                                    </div>   
                                </div> 
                        
                            </Modal>

                        </div>
                    </div>

{/*Pillow Line Section:  This is the section with the light grey background*/}

                    <div className="bg-light-grey">
                        <img className="field" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018375/Malouf/resized%20images/supima-field-footer-bwfade.png' alt="Field of Cotton"/>

                        <div className="pillowTitle">
                            <h3>WE'VE EXPANDED THE Z<sup><i id="sup" className="fa fa-trademark"></i></sup></h3>
                        </div>
                        <div className="pillowTitle2">
                            <h3>SHOULDER PILLOW LINE</h3>
                        </div>
                        <div className="pillowParaParent">
                            <div className="pillowParagraph">
                                <p id="pillowPara" className="sans-serif">
                                Building on the success of our unique shoulder design, side sleepers can 
                                choose from a variety of Dough<sup><i id="registered" className="far fa-registered"></i></sup> pillows to meet their needs and 
                                preferences. Our vibrant colors, refreshing fragrances, and beautiful 
                                packaging create a very attractive display you won't want to miss. 
                                </p>
                            </div>
                        </div>

                        <div className="pillowImgParent">
                            <div>
                                <img className="pillowsImg1" src ='https://res.cloudinary.com/scottisyoung/image/upload/v1529018364/Malouf/resized%20images/expanded-z-line-all-together.png' alt=" Arrangment of Pillows"/>
                            </div>
                        </div>

                        <div className="pillowNamesParent">
                            <div className="pillowSpace">
                                <p className="sans-serif italic">Gel Dough <sup><i id="pillowReg" className="far fa-registered"></i></sup> + Z <sup><i id="pillowSup" className="fa fa-trademark"></i></sup> Gel</p>
                                <a href="">View &#8250;</a>  
                            </div>
                            <div className="pillowSpace">
                                <p className="sans-serif italic">Zoned Gel Dough <sup><i id="pillowReg" className="far fa-registered"></i></sup></p>
                                <a href="">View &#8250;</a> 
                            </div>
                            <div className="pillowSpace">
                                <p className="sans-serif italic">Bamboo Charcoal</p>
                                <a href="">View &#8250;</a> 
                            </div>
                            <div className="pillowSpace">
                                <p className="sans-serif italic">Lavender</p>
                                <a href="">View &#8250;</a> 
                            </div>
                            <div className="pillowSpace">
                                <p className="sans-serif italic">Chamomile</p>
                                <a href="">View &#8250;</a> 
                            </div>
                            <div className="pillowSpace">
                                <p className="sans-serif italic">Peppermint</p>
                                <a href="">View &#8250;</a> 
                            </div>
                        </div>

{/* Hidden Section until media queries reach cell phone size*/}

                    <div className="hiddenPillowsParent">
                        <div>
                            <img className="pillows3" src ='https://res.cloudinary.com/scottisyoung/image/upload/v1529018362/Malouf/resized%20images/divided-z-line.png' alt="Variety of Pillows"/>
                            <div className="rowPillows">
                                <div className="centerHiddenTitles">
                                    <p className="sans-serif italic">Lavender</p>
                                    <a href="">View &#8250;</a> 
                                </div>
                                <div className="centerHiddenTitles">
                                    <p className="sans-serif italic">Chamomile</p>
                                    <a href="">View &#8250;</a>  
                                </div>
                                <div className="centerHiddenTitles">
                                    <p className="sans-serif italic">Peppermint</p>
                                    <a href="">View &#8250;</a> 
                                </div>
                            </div>  
                        </div>

                        <div>
                            <img className="pillows2" src ='https://res.cloudinary.com/scottisyoung/image/upload/v1529018363/Malouf/resized%20images/divided-z-line-2.png' alt="Pattened Pillows"/>
                            <div className="rowPillows">
                                <div className="centerHiddenTitles2">
                                    <p className="sans-serif italic">Gel Dough <sup><i id="pillowReg" className="far fa-registered"></i></sup> + Z <sup><i id="pillowSup" className="fa fa-trademark"></i></sup> Gel</p>
                                    <a href="">View &#8250;</a>  
                                </div>
                                <div className="centerHiddenTitles2">
                                    <p className="sans-serif italic">Zoned Gel Dough <sup><i id="pillowReg" className="far fa-registered"></i></sup></p>
                                    <a href="">View &#8250;</a> 
                                </div>
                                <div className="centerHiddenTitles2">
                                    <p className="sans-serif italic">Bamboo Charcoal</p>
                                    <a href="">View &#8250;</a> 
                                </div>
                            </div>
                        </div>
                    </div>


                        <div className="randomPicsParent">
                            <div>
                                <div>
                                    <p id="headboardTitle" className="sans-serif bold">A TOUCH OF ELEGANCE:</p>
                                    <p className="newStructures">New Structures<sup><i id="supStructures" className="fa fa-trademark"></i></sup> &nbsp;Headboards</p>
                                    <img className="headboard" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018367/Malouf/resized%20images/headboard.jpg' alt="Beds Headboard"/>
                                </div>
                            </div>
                            <div>
                                <img className="showroom" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018370/Malouf/resized%20images/showroom.jpg' alt="Conference Showroom"/>
                            </div>
                            <div>
                                <div>
                                    <img className="hamburger" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018366/Malouf/resized%20images/hamburger.jpg'alt="Delicious Hamburger"/>
                                    <p id="hamburgerTitle" className="sans-serif bold">A SENSATIONAL EXPERIENCE:</p>
                                    <p className="chefPrepared">Chef-Prepared Gourmet Food & Giveaways</p>
                                </div>
                            </div>
                        </div>

{/* Hidden area until Tablet and Cell Phone Media Queries*/}

                        <div className="unhide">
                            <div className="centerRandomPics">
                                <div> <p id="headboardTitle2" className="sans-serif bold">A TOUCH OF ELEGANCE:</p> </div>
                                <div> <p className="newStructures2">New Structures <sup><i id="supStructures" className="fa fa-trademark"></i></sup> &nbsp;Headboards</p> </div>
                                <div> <img className="headboard2" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018367/Malouf/resized%20images/headboard.jpg' alt="Headboard of a Bed"/></div>
                                <div> <img className="showroom2" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018370/Malouf/resized%20images/showroom.jpg' alt="Sales Conference"/> </div>
                                <div> <img className="hamburger2" src='https://res.cloudinary.com/scottisyoung/image/upload/v1529018366/Malouf/resized%20images/hamburger.jpg' alt="Gourmet Food"/> </div>
                                <div> <p id="hamburgerTitle2" className="sans-serif bold">A SENSATIONAL EXPERIENCE:</p> </div>
                                <div> <p className="chefPrepared2">Chef-Prepared Gourmet Food & Giveaways</p> </div>
                            </div>
                        </div>

                    </div>
                </div>

{/*Dark Grey Section:  This is the section with the Dark Grey Background with the 3 pictures included.*/}

                <div className="bg-dark-grey">
                    <div>
                        <div className="thankTitle"> 
                            <h1 className="thank">THANK YOU</h1>
                        </div>
                        <div className="thankTitle">
                            <h5 className="thankSub">FOR ANOTHER GREAT MARKET</h5>
                        </div>
                        <div className="thankTitle">
                            <a href="" className="recap">View Showroom Recap &#8250;</a>
                        </div>
                    </div>
                </div>


                
            </div>
        )
    }
}

export default Landing;