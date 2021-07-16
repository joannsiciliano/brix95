import React from "react";
import brixlogo from "./brix5.png";

const Home = () => {
  return (
    <main className="Home">
      <img
        src={brixlogo}
        className="BrixLogo"
        alt="brix"
        title="Welcome to Brix_95, a review website for brick weed :) "
      />
      <section className="home_intro">
        "Come rate some Brick Weed, at Brix95"
      </section>
    </main>
  );
};

export default Home;
