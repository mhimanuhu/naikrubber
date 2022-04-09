import React from 'react';
import "../Home/Home.css"
export default class AboutCard extends React.Component{
    render()
    {
        return(
         <>
         <div className="AboutCard">
            <div className="AboutCardImage">
                 <img draggable="false" src="dummy.png" alt="what we do" />
            </div>
                        
         <div className="AboutCardTitle">{this.props.Atitle}</div>
            <div className="AboutCardDesc">{this.props.Adesc}</div>
         </div>          
         </>
        )
    }
}