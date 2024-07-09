import React, { useEffect, useRef } from "react";
import GroupIcon from "./images/Group 1.png";
import landingpageImage from "./images/landingpage1.png";
import "./Header.css";

const Header = ({ tentangRef, dataRef, biodataRef, dosenbiodataRef, datatestingRef }) => {
  useEffect(() => {
    const headerContent = document.querySelector(".header-content");
    const landingPageImage = document.querySelector(".landingpage-image");

    if (headerContent) headerContent.style.animationDelay = "0.5s";
    if (landingPageImage) landingPageImage.style.animationDelay = "0.5s";
  }, []);

  const scrollToSection = (ref) => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: ref.current.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="navigation">
        <div className="left">
          <img
            src={GroupIcon}
            alt="Group Icon"
            className="group-icon"
          />
          <p className="copyright">MammalsSphere</p>
        </div>
        <div className="right">
          <a href="#">Home</a>
          <a href="#" onClick={() => scrollToSection(tentangRef)}>
            Information
          </a>
          <a href="#" onClick={() => scrollToSection(dataRef)}>
            Data
          </a>
          <a href="#" onClick={() => scrollToSection(biodataRef)}>
            Team
          </a>
          <a href="#" onClick={() => scrollToSection(dosenbiodataRef)}>
            Dosen
          </a>
          <button onClick={() => scrollToSection(datatestingRef)} className="process-button">
            Start Prediction
          </button>
        </div>
      </nav>
      <div className="content-header header-content grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-32">
            <h1 className="title">
              Klasifikasi Jenis <br />
              Hewan Mamalia
            </h1>
          </div>
          <div className="mb-4">
            <p className="description">
              Hewan mamalia adalah kelompok hewan menyusui yang memiliki beragam spesies dan tersebar luas di muka bumi.
            </p>
          </div>
          <div className="mt-4">
            <button className="info-button" onClick={() => scrollToSection(tentangRef)}>
              Info Selengkapnya
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={landingpageImage}
            alt="Landing Page"
            className="landingpage-image max-w-full h-auto"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
