import React from "react";
import HomeNav from "../Layouts/HomeNav";
import Footer from "../Layouts/Footer";
import OurMission from "../Layouts/OurMission";
import MissionBody from "../Layouts/MissionBody";

function AboutUs() {
  return(
    <>
      <HomeNav/>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>Constantly working for a clean tomorrow!</p>
        </div>
      </div>
      <OurMission/>
      <br /><br />
      <MissionBody/>
       <Footer/>
    </>
  )
}
export default AboutUs