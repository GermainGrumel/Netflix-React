import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://occ-0-3053-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZxyhiHO8bOpDRpf4FNP-r-h0Nq2LnetOs1DQVVgEjndWsz0_DM0BKbUEebCmzA1nI_p52q2LD6LnTbAgYTbPaz3BVJO.png?r=ea4"
        alt="My Avatar"
      />
    </div>
  );
}

export default Nav;
