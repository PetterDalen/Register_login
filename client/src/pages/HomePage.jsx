import React from "react";
import HomePageComponent from "../components/HomePage";

const HomePage = () => {
  const username = "User"; // Replace with actual username from context or state

  return (
    <div>
      <HomePageComponent username={username} />
    </div>
  );
};

export default HomePage;
