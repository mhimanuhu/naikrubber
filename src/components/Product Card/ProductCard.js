import React from 'react';
import "../Pages/Home/Home.css";
export default class ProductCard extends React.Component{
    render(){
        return(
            <>
            <div className="Product">
                      <img src="EPDM.png" alt="product" />
                      <div className="productcard">
                          <div className="title">{this.props.productname}</div>
                          <div className="viewdetails">View Details</div>
                          </div>
                 </div> 
            </>
        )
    }
}