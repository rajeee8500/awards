import React from "react";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Navbar from "../../Components/Navbar/Navbar";
import AwardsGrid from "../../Components/AwardsGrid/AwardsGrid";
import Congrats from "../../Components/Congrats/Congrats";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <AwardsGrid />
      <Congrats />
      <Footer />
    </div>
  );
}

export default Home;
