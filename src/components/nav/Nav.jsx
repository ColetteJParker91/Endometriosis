import React from "react";
import "./nav.css";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiMedicalDrip } from "react-icons/gi";
import { GiStitchedWound } from "react-icons/gi";
import { GiLightningTrio } from "react-icons/gi";
import { FaNotesMedical } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#symptoms"
        onClick={() => setActiveNav("#symptoms")}
        className={activeNav === "#symptoms" ? "active" : ""}
      >
        <FaNotesMedical />
      </a>
      <a
        href="#treatment"
        onClick={() => setActiveNav("#treatment")}
        className={activeNav === "#treatment" ? "active" : ""}
      >
        <GiMedicalDrip />
      </a>
      <a
        href="#surgery"
        onClick={() => setActiveNav("#surgery")}
        className={activeNav === "#surgery" ? "active" : ""}
      >
        <GiStitchedWound />
      </a>
      <a
        href="#pain"
        onClick={() => setActiveNav("#pain")}
        className={activeNav === "#pain" ? "active" : ""}
      >
        <GiLightningTrio />
      </a>
      <a
        href="#info"
        onClick={() => setActiveNav("#info")}
        className={activeNav === "#info" ? "active" : ""}
      >
        <RiInformationLine />
      </a>
    </nav>
  );
};

export default Nav;
