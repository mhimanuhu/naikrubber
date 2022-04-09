import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (
      <>
    <header>
        {/* Mobile Menu Section */}
    <div className="Mobile_Menu">
    <div className="Mob_Nav_Container">
        
        <div className="Mobile_No_Block">
        
        </div>

        <div className="Logo_Menu">
            <div className="Mob_Logo">
             <img src="NavLogo.png" alt="Mob_Logo" />
            </div>

            <div className="Menu_Icon">

            </div>
        </div>
    </div>
    </div>
     {/* Desktop Navbar Section */}
    <div className="Navbar">
        {/* Navbar Center Structure */}
        <div className="nav">
            <div className="Logo">
               <NavLink to="/" > <img className="Desktop_Logo" src="NavLogo.png" alt="Logo" /></NavLink>
            </div>
                
            <div className="Nav_Links_Container">

              <div className="Top_Links_Container">
                  <ul>
                      <li className="topnav_links" >Get a Quote</li>
                      <li className="topnav_links call " >CALL US</li>        
                      <li className="topnav_links email" > Email </li>
                      <li className="topnav_links nl " >Get a Quote</li>
                  </ul>
              </div>

              <div className="Bottom_Links_Container">
               <ul>
               <NavLink to="/" ><li className="nav_links" >HOME </li></NavLink>
               <NavLink to="/About">  <li className="nav_links" >  ABOUT US  </li></NavLink>
               <NavLink to="/Products"> <li className="nav_links" >  PRODUCTS</li></NavLink>
                                        <li className="nav_links" >  GALLERY</li>
               <NavLink to="/Industries-we-serve">  <li className="nav_links" >  INDUSTRIES WE SERVE</li></NavLink>
                   <li className="nav_links dropdown" >POLYMER INFO
                         <ul className="Dropmenu" >
                             <li className="Droplinks" >   Natural Rubber </li>
                             <li className="Droplinks" >  EPDM  </li>
                             <li className="Droplinks" >  NBR  </li>
                             <li className="Droplinks" >  FKM  </li>
                             <li className="Droplinks" >  Silicone  </li>
                             <li className="Droplinks" >  CR  </li>
                         </ul>
                    </li>
                <NavLink to="/Contact"> <li className="nav_links" >CONTACT US</li> </NavLink>
               </ul>
              </div>

            </div>
        </div>
    </div>
</header>

</>
  )
}

export default Navbar