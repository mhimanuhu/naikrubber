import React from "react";
import './Home.css'
import Why from "../../Why/Why";
import Testimonial from "../../Testimonials/Testimonial";
import AboutCard from "../About/AboutCard";
import ProductCard from "../../Product Card/ProductCard";
const Home = ()=> {
    return (
        <>
        {/*HeroSection*/}
         <div className="Herosection">
             {/* Section 1 */}
             <div className="Section1">
                <div className="Hero_heading">Rubber Profiles and Sections</div>
                <div className="Hero_para">We are a leading manufacturer, exporter, wholesaler/distributer, and supplier of all types of rubber products as molded and extruded profiles sections gaskets stripes, and tubes</div>
                <div className="Hero_button">View More</div>
             </div>
             {/* Section 2 */}
             <div className="Section2">
            Image Box
             </div>
         </div>
            {/*Hero Section ends*/}

        {/*Our Products Starts*/ }

        <div className="OurProductsContainer">
              <div className="BlockHeading">Our Products</div>
              <p>Our product includes Natural Synthetic, EPDM, Neoprene, Silicon, Viton Rubber Extruded, Molded, Hoses & Components & All Rubber Sponch Products, Silicon Cables and Transparent. All these products are used by different industries and different customers.</p>

              <div className="ProductswithImageContainer">       
                  <ProductCard productname="Silicone Rubber Extruded Profile" />   
                  <ProductCard productname="EPDM Rubber Profile" />   
                  <ProductCard productname="EPDM Rubber Profile" /> 
                  <ProductCard productname=" Extruded EPDM Rubber Profile" />               
              </div>             

              {/* Products with Image End */}

                <div className="View_more_container">
                    <div className="viewmorebtn">VIEW MORE</div>
                </div>

                {/* View More btn end */}
        </div>

               {/*Our Products End*/}
              
               <div className="AboutUsContainer">
                   <div className="BlockHeading">About Us</div>
                   <p>Welcome to Naik Rubber Products</p>
                <div className="About_desc">
                Naik Rubber Products established in 1967 by Mr. Shankar Naik and now taken care by Mr. Dilip Naik. Naik Rubber Products, is a prominent manufacturer, exporter, wholesaler/distributor and supplier of all types of rubber products as molded and extruded profiles sections gaskets stripes and tubes. Our product includes Natural Synthetic, EPDM, Neoprene, Silicon, Viton Rubber Extruded, Molded, Hoses & Components & All Rubber Sponch Products, Silicon Cables and Transparent. All these products are used by different industries and different customers.
                </div>

                   {/* About Us Cards */}

                   <div className="AboutCardsContainer">
                      <AboutCard 
                       Atitle="What we do"
                       Adesc="Our products are fitted during the manufacture of vehicles, earth moving equipment, domestic appliances, lighting and pumping systems as well as electronic control, aviation, motorsport and machinery applications." />
                      
                      <AboutCard 
                       Atitle="Our Mission Statement"
                       Adesc="To provide quality products and services to our customers in order to maximize and sustain long-term profitability. Doing so will benefit our company's customers, suppliers, employees, and shareholders." />
                      
                      <AboutCard
                       Atitle="Our Vision Statement"
                       Adesc=" To create shareholder and societal value while reducing the environmental footprint along the value chains in which we operate." />
                   </div>
               </div>
                <Why/>
                <div className="OurGalleryContainer">
                    <div className="BlockHeading">Our Gallery</div>
                    <p>Our Gallery includes Sample of Natural Synthetic, EPDM, Neoprene, Silicon, Viton Rubber Extruded, Molded, Hoses & Components & All Rubber Sponch Products, Silicon Cables and Transparent.</p>
                    <div className="GalleryImageContainer">
                        <img src="dummy.png" draggable="false" alt="gallery" />
                        <img src="dummy.png" draggable="false" alt="gallery" />
                        <img src="dummy.png" draggable="false" alt="gallery" />
                        <img src="dummy.png" draggable="false" alt="gallery" />
                        <img src="dummy.png" draggable="false" alt="gallery" />
                        <img src="dummy.png" draggable="false" alt="gallery" />
                        <img src="dummy.png" draggable="false" alt="gallery" />
                    
                    </div>
                    <div className="View_more_container">
                    <div className="viewmorebtn">VIEW MORE</div>
                </div>
                </div>

                <Testimonial/>

                {/*Contact Us Section*/}

                <div className="Contact_Section">
                    <div className="ContactSection1">
                        <div className="ContactHead">Get In Touch</div>

                        <div className="ContactForm">
                            <form>
                                <label> Name
                                    <input type="text" placeholder="Your Name" id="name" autoComplete="off" />
                                </label>

                                <label> Email
                                    <input type="email" placeholder="Your Email" id="email" autoComplete="off" />
                                </label>

                                <label> Your Message
                                    <input type="text" placeholder="Type your message" id="message" autoComplete="off" />
                                </label>

                                <button type="submit" >Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="ContactSection2"> Map Area</div>
                </div>
                

        </>
    )
}

export default Home;