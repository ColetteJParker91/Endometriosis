import React from "react";
import "./header.css";
import HEADER from "../../assets/header.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Endometriosis Information</h5>
        <h2>
          Here you will find information available about Endometriosis compiled
          into one easy and simple website.
        </h2>
      </div>
      <div className="header-pic">
        <img src={HEADER} alt="womens reproductive system image" />
      </div>
    </header>
  );
};
export default Header;
