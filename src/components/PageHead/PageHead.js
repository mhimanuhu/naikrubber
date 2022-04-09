import React from "react";
import "./PageHead.css";
import {Link} from "react-router-dom";
export default class PageHead extends React.Component{
    render()
    {
        return(
            <>
            <div className="Page_Heading">
                <div className="Page_title" >{this.props.pagetitle}</div>
                <div className="Home_route">
                  <Link to="/" ><li>Home</li></Link>  
                  {/* Arrow Space */}
                  <li>{this.props.pagetitle}</li>
                </div>
            </div>
            </>
        )
    }
}