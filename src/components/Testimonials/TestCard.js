import React from 'react';
import "./Testimonial.css";
export default class TestCard extends React.Component{
    render()
    {
        return(
         <>
            <div className='Tcard'>
                    <img src={this.props.image} alt="User_image" />
                    <div className="Review">{this.props.review}</div>
                    <div className="User_name">{this.props.username}</div>
                    <div className="post">{this.props.post}</div>
                    <div className="User_company">{this.props.company}</div>
                    <div className="User_location">{this.props.location}</div>
            </div>
          
         </>
        )
    }
}