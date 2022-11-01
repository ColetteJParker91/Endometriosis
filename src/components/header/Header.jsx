import React from "react";
import "./header.css";
import HEADER from "../../assets/header.jpg";

const Header = () => {
  return (
    <header className="container">
      <div className="container-header-content">
        <div className="header-text">
          <h2>Endometriosis Information</h2>
          <h5>
            Here you will find information available about Endometriosis
            compiled into one easy and simple website.
          </h5>
        </div>
        <div className="header-pic">
          <img src={HEADER} alt="womens reproductive system image" />
        </div>
      </div>
    </header>
  );
};
export default Header;
