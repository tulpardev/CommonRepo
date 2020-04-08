import React from "react";
import UserLogin from "../userlogin/UserLogin";
import { Link } from "react-router-dom";
import Header from "../root/Header";

function HomePage() {
  return (
    <div className="home-container">
       <Header/>
      <div className="container">
        <UserLogin />
       
      </div>
    </div>
  );
}

export default HomePage;
