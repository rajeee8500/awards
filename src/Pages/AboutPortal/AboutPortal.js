import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./AboutPortal.css";
import cup from "../../images/cup.png";
function AboutPortal() {
  return (
    <div>
      <Navbar />
      <div className="right">
        <div className="para">
          <p>
            Several civilian awards have been instituted by various
            Ministries/Departments/Agencies of the Government of India to
            recognize people who have excelled in their fields and worked with
            dedication for selfless service to society.
          </p>
          <p>
            The Rashtriya Puraskar Portal is an initiative to bring together all
            National Awards of the various Ministries/Departments/Agencies of
            the Government of India under one digital platform reflecting
            transparency, accountability, and public partnership (Jan
            Bhagidari). This portal aims to facilitate citizens to nominate
            individuals/organizations for various awards instituted by the
            Government of India to recognize and award them for their
            exceptional contributions in their respective fields.
          </p>
          <p>
            {" "}
            With this portal, for the first time in the history of India,
            information regarding all national awards would be available to the
            public on a single digital platform including their eligibility
            criteria, selection procedure, and details of past awardees. Also,
            people will be able to make nominations for various awards on a
            single platform, which is simple and user-friendly.
          </p>
        </div>
        <img src={cup} />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPortal;
