import React from "react";
import "./Footer.css";
import { FooterLabels } from "../../DummyData";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Header WP.jpg";
import emailjs from "emailjs-com";

function Footer() {
  const sendEmailClick = async () => {
    try {
      const userName = prompt("Please Enter Your Name:");
  
      const userInput = prompt("Please Enter Your Email Address:");
  
      if (userInput === null) {
        alert("User declined.");
        return;
      }
  
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailPattern.test(userInput)) {
        const emailParams = {
          to_email: userInput, 
          to_name:userName
        };
  
        emailjs
          .send(
            "service_xv6uh48",
            "template_g5nnws1",
            emailParams,
            "iKaHsAROHyLMjm1ow"
          )
          .then(
            (response) => {
              console.log("Request Successfully:", response);
            },
            (error) => {
              console.log("Request Failed:", error);
            }
          );
  
        alert("You Successfully Subscribed.");
      } else {
        alert(`Invalid Email address: ${userInput}`);
      }
    } catch (error) {
      console.error("Request Failed", error);
    }
  };
  

  

  return (
    <div>
      <div className="subscribe">
        <p>
          <Link onClick={sendEmailClick} className="highlight">
            {" "}
            Subscribe to Krishimanthan's 
          </Link>{" "}
          newsletter for the latest updates and insights!
        </p>
      </div>
      <div className="footer">
        <div className="footer-section">
          <img src={Logo} alt="" />
          <p>
            मध्यप्रदेश देश का दिल है और दिल से निकली बात बहुत गहरा असर डालती है।
            पिछले दो दशक में इस प्रदेश ने अनेक कीर्तिमान स्थापित किए हैं। हमने
            भी दो दशक पूर्व यहां से कृषि मंथन पत्र का प्रकाशन शुरू किया। मकसद था
            कृषि, सहकारिता, पंचायत और ग्रामीण विकास के मुद्दों पर जनता और शासन
            -प्रशासन के मध्य एक सेतु की भूमिका अदा करना। अठारह वर्ष से हम अपना
            फर्ज बेबाकी के साथ निभाते आ रहे हैं। प्रिंट मीडिया के साथ
            इलेक्ट्रॉनिक मीडिया भी आज वक्त की जरूरत बन गया है। इस वेबसाइट के
            माध्यम से हमने अपने सीमित प्रयत्नों को विस्तार देने का प्रयास किया
            है।
          </p>
          <div>
            <p>krishimanthan@gmail.com</p>
            <p>+91 79995821501</p>
          </div>
        </div>
        <div className="footer-labels">
          <h4>लेबल</h4>
          <ul>
            {FooterLabels.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="link-style">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="credits">
        <p>© all rights reserved</p>
        <p>
          made with <span>&#x2764;</span> by Agile Support
        </p>
      </div>
    </div>
  );
}

export default Footer;