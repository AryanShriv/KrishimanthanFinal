import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import Uncle from "../../Assets/Data/SunilUncle.jpg";
import {
  RegionalOffice,
  EditorDetail,
  adverstisment,
  developer,
} from "../../DummyData";

function ContactUs() {
  return (
    <div className="Contact-page">
      <div className="founder">
        <div className="founder-head">
          <h1 className="heading1">Editor-in-chief's Desk</h1>
        </div>
        <div className="founder-details">
          <img src={Uncle} alt="" srcSet="" />
          <div className="founder-content">
            <p className="contact-para">Name: Mr. Sunil Kumar Tiwari</p>
            <p className="contact-para">Phone Number: 7999582150</p>
          </div>
        </div>
      </div>
      <div className="founder">
        <div className="headOffice">
          <h1 className="heading1">Contact Us</h1>
          <h2 className="heading2">Head Office:</h2>
          <p className="contact-para">
            116, Dawa Bazaar, 4th Floor<br></br>
            RNT Marg, Indore - 462011 (M.P.) <br></br>
            Phone: 7999582150, 9424595540
            <br></br>
            e-mail: krishimanthan@gmail.com
            <br></br>
            website: &nbsp;{" "}
            <Link to="/" className="linkTag">
              कृषि मंथन
            </Link>
          </p>
        </div>

        <div className="regionalOffice">
          <h2 className="heading2">Regional Office: </h2>
          {RegionalOffice.map((item, index) => (
            <div key={index}>
              <h2 className="heading2">{item.cityname}</h2>
              <p className="contact-para">Name: {item.name}</p>
              <p className="contact-para">Phone: {item.mobileNumber}</p>
            </div>
          ))}
        </div>

        <div className="editorInfo">
          <h1 className="heading1">Editorial Desk</h1>
          {EditorDetail.map((item, index) => (
            <div key={index}>
              <p className="contact-para">Name: {item.name}</p>
              <p className="contact-para">Phone Number: {item.mobile}</p>
              <p className="contact-para">City: {item.city}</p>
            </div>
          ))}
        </div>

        <div className="adverstisment">
          <h1 className="heading1">Advertisement Enquiry</h1>
          {adverstisment.map((item, index) => (
            <div className="advertiserDetail" key={index}>
              <p className="contact-para">Name: {item.name}</p>
              <p className="contact-para">Phone Number: {item.mobile}</p>
              <p className="contact-para">City: {item.city}</p>
            </div>
          ))}
        </div>
        <div className="developer">
          <h1 className="heading1">Website Developer</h1>
          {developer.map((item, index) => (
            <div className="developerDetail" key={index}>
              <p className="contact-para">Name: {item.name}</p>
              <p className="contact-para">Email: {item.mobile}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
