import React from "react";
import ProfilePic from "../assets/profile.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What  Clients Are Saying</h1>
        <p className="primary-text">
          We take pride in delivering an exceptional experience. See what our satisfied clients have to say about our services and commitment to excellence.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "I am beyond impressed with the quality of service and the delicious meals. It's a game-changer for anyone looking for convenience without compromising on taste."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>khatirina</h2>
      </div>
    </div>
  );
};

export default Testimonial;
