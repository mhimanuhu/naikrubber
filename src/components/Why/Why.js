import React from 'react';
import './Why.css';
const Why = () => {
  return (
    <>
    <div className="whycont">
         <div className="Whytitle">Why Choose Us?</div>
         <div className="b-border"></div>
         <div className="s-border"></div>

         <p>
         Since our origin in this market, we are actively committed to providing our prestigious patrons with a remarkable range of products.
         </p>
         <p>Few reasons which are responsible for our development in this domain are as follow:</p>

         <div className="listcontainer">
             <ul>
                 <li><div class="tick"></div>Extremely reliable range of products</li>
                 <li><div class="tick"></div>Well managed services</li>
                 <li><div class="tick"></div>Highly experienced team of professionals</li>
                 <li><div class="tick"></div>Strict quality standards</li>
                 <li><div class="tick"></div>Timely delivery</li>
             </ul>

             <ul>
                 <li><div class="tick"></div>Strong vendor base</li>
                 <li><div class="tick"></div>Wide distribution network</li>
                 <li><div class="tick"></div>Huge warehouse</li>
                 <li><div class="tick"></div>Customized packaging</li>
                 <li><div class="tick"></div>Competitive price structure</li>
             </ul>
         </div>
    </div>
    </>
  )
}

export default Why