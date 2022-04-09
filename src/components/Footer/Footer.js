import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='Footer_About'>
            <div className='FooterHeading'>About Us</div>
            <p>Naik Rubber Products established in 1967 by Mr. Shankar Naik and now taken care by Mr. Dilip Naik. Naik Rubber Products, is a prominent manufacturer, exporter, wholesaler/distributor and supplier of all types of rubber products.</p>
        </div>
        <div className='Second_Comp'>
            <div>+91 982 122 7950</div>
            <div>+91 982 122 7950</div>
            <div className='Footer_UsefulLinks'>
                <div className='FooterHeading'>Useful Links</div>
                <div className='FooterULinks'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Gallery </li>
                    <li>Polymer Info</li>
                    <li>Infrastructure</li>
                    <li>Contact Us</li>
                </div>
            </div>
        </div>
        <div className='Footer_OurProducts'></div>
        <div className='Footer_Contactus'></div>
    </div>
  )
}

export default Footer