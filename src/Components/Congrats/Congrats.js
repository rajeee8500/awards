import React from "react";
import awards from "../../images/Awards.jpg";
import "./Congrats.css";

function Congrats() {
  return (
    <div className="congratsContainer">
      <h1 className="congratsHeading">The Awardee's Photo</h1>
      <img src={awards} alt="Congratulations" className="congratsImage" />
      <p className="text3">Congratulations Awardees</p>
    </div>
  );
}

export default Congrats;
