import React from "react";
import "./Reasons.css";
import image_1 from "../../assets/image1.png";
import image_2 from "../../assets/image2.png";
import image_3 from "../../assets/image3.png";
import image_4 from "../../assets/image4.png";
import np from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
      <div className="left-r">
        <img src={image_1} alt="" />
        <img src={image_2} alt="" />
        <img src={image_3} alt="" />
        <img src={image_4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
        style={
          {
          color:"var(--gray)",
          fontWeight:'normal'
          }
        }>OUR PARTNERS</span>
        <div className="partners">
          <img src={np} alt=""/>
          <img src={adidas} alt=""/>
          <img src={nike} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
