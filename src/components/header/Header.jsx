import React from "react";
import "./header.css";
import HEADER from "../../assets/header.jpg";

const Header = () => {
  return (
    <header className="container">
      <div className="container-header-content">
        <div className="container-header-text">
          <h1>Endometriosis Information</h1>
          <h4>
            Here you will find information available about Endometriosis
            compiled into one easy and simple website.
          </h4>
        </div>
        <div className="header-pic">
          <img src={HEADER} alt="womens reproductive system image" />
        </div>
      </div>
    </header>
  );
};
export default Header;
