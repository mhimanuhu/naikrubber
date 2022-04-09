import React, {Component} from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Testimonial.css";
import TestCard from "./TestCard";
export default class CenterMode extends Component {
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow:3,
        speed:1000,
      };

      const respo ={
        
        slidesToScroll:1,
        infinite: true,
        slidesToShow:1,
        speed:1000,
      };
      return (
        <>
        <div className="TestimonialContainer" >
          <div className="TestimonialHeadingContainer">
                <div className="BlockHeading">Testimonials</div>
          </div>

        <div className="Carousel_desktop" >
          
          <Slider {...settings}>
            <div className="comp" >
              <TestCard 
                review="Thank you very much for supplying our order quickly - it really is much appreciated. It was also very beneficial to receive product on time - this meant that we are 100% sure that would work for our needs." 
                image="dummy.png"
                username="Dharmesh Raval"
                post="Admin Manager"
                company="Shivam Autozone India Pvt. Ltd"
                location="Kandivali - West"
            /></div>  

            <div className="comp" >
              <TestCard 
                review="Happy with Naik Rubber Products in all manner like product quality and on time delivery. Thank you so much....:)" 
                image="dummy.png"
                username="Laxman Rawool"
                post="Purchase Officer"
                company="P.M Electroauto Pvt. Ltd"
                location="Palghar West"
            /></div>  

            <div className="comp" >
              <TestCard 
              review="Thank you very much for supplying our order quickly - it really is much appreciated. It was also very beneficial to receive product on time - this meant that we are 100% sure that would work for our needs." 
              image="dummy.png"
              username="Dharmesh Raval"
              post="Admin Manager"
              company="Shivam Autozone India Pvt. Ltd"
              location="Kandivali - West"
            /></div>  

            <div className="comp" >
              <TestCard 
              review="Happy with Naik Rubber Products in all manner like product quality and on time delivery. Thank you so much....:)" 
              image="dummy.png"
              username="Laxman Rawool"
              post="Purchase Officer"
              company="P.M Electroauto Pvt. Ltd"
              location="Palghar West"
            /></div>  

              

          </Slider>
        </div>

        <div className="Carousel_respo">
          <Slider {...respo} >
          <div className="comp" >
            <TestCard 
              review="Thank you very much for supplying our order quickly - it really is much appreciated. It was also very beneficial to receive product on time - this meant that we are 100% sure that would work for our needs." 
              image="dummy.png"
              username="Dharmesh Raval"
              post="Admin Manager"
              company="Shivam Autozone India Pvt. Ltd"
              location="Kandivali - West"
            /></div>  

            <div className="comp" >
              <TestCard 
              review="Happy with Naik Rubber Products in all manner like product quality and on time delivery. Thank you so much....:)" 
              image="dummy.png"
              username="Laxman Rawool"
              post="Purchase Officer"
              company="P.M Electroauto Pvt. Ltd"
              location="Palghar West"
            /></div>  

            <div className="comp" >
              <TestCard 
              review="Thank you very much for supplying our order quickly - it really is much appreciated. It was also very beneficial to receive product on time - this meant that we are 100% sure that would work for our needs." 
              image="dummy.png"
              username="Dharmesh Raval"
              post="Admin Manager"
              company="Shivam Autozone India Pvt. Ltd"
              location="Kandivali - West"
            /></div>  

            <div className="comp" >
              <TestCard 
              review="Happy with Naik Rubber Products in all manner like product quality and on time delivery. Thank you so much....:)" 
              image="dummy.png"
              username="Laxman Rawool"
              post="Purchase Officer"
              company="P.M Electroauto Pvt. Ltd"
              location="Palghar West"
            /></div>  

          </Slider>
        </div>
        </div>
        </>
      );
    }
  }