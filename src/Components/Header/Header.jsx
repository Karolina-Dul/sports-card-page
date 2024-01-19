import React from "react";
import logoBenefit from "../../Images/logoBenefit.png";
import "../Header/Header.css";
import LoginWindow from "./LoginWindow/LoginWindow";

const Header = () => {
  return (
    <div className="header-background">
      <img
        src={logoBenefit}
        alt="logo Benefit Systems"
        className="logo-benefit-systems"
      />
      <LoginWindow />
    </div>
  );
};

export default Header;
