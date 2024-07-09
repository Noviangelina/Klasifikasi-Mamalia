import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import "./styles.css";
import AnimalCard from "./components/AnimalCard";
import landingpageImage from "./images/landingpage1.png";
import GroupIcon from "./images/Group 1.png";
import gbr1 from "./images/gbr1.png";
import gbr2 from "./images/gbr2.png";
import gbr3 from "./images/gbr3.png";
import Tentang from "./Tentang";
import Data from "./Data";
import Biodata from "./Biodata";
import DosenBiodata from "./DosenBiodata";
import DataTesting from "./DataTesting";

function App() {
  const [headerColor, setHeaderColor] = useState('white');

  const handleHeaderClick = () => {
    setHeaderColor('#008080');
  };

  const tentangRef = useRef(null);
  const dataRef = useRef(null);
  const biodataRef = useRef(null);
  const dosenbiodataRef = useRef(null);
  const datatestingRef = useRef(null);

  useEffect(() => {
    const headerContent = document.querySelector(".header-content");
    const landingPageImage = document.querySelector(".landingpage-image");

    if (headerContent) headerContent.style.animationDelay = "0.5s";
    if (landingPageImage) landingPageImage.style.animationDelay = "0.5s";
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: ref.current.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (event, ref) => {
    event.preventDefault();
    scrollToSection(ref);
  };

  return (
    <div className="App">
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
            <a href="#" onClick={(e) => handleNavClick(e, tentangRef)}>
              Information
            </a>
            <a href="#" onClick={(e) => handleNavClick(e, dataRef)}>
              Data
            </a>
            <a href="#" onClick={(e) => handleNavClick(e, biodataRef)}>
              Team
            </a>
            <a href="#" onClick={(e) => handleNavClick(e, dosenbiodataRef)}>
              Dosen
            </a>
            <button onClick={(e) => handleNavClick(e, datatestingRef)} className="process-button">
              Start Prediction
            </button>
          </div>
        </nav>
      </header>
      <div className="App-content">
        <header className="content-header header-content grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </header>

        <main className="App-main">
          <AnimalCard
            title="Mamalia Bertelur"
            description="Monotremata"
            icon={gbr1}
          />
          <AnimalCard
            title="Mamalia Berkantung"
            description="Marsupialia"
            icon={gbr2}
          />
          <AnimalCard
            title="Mamalia Berplasenta"
            description="Plasentalia"
            icon={gbr3}
          />
          <Tentang ref={tentangRef} />
          <Data ref={dataRef} />
          <Biodata ref={biodataRef} />
          <DosenBiodata ref={dosenbiodataRef} />
          <DataTesting ref={datatestingRef} />
        </main>
      </div>
    </div>
  );
}

export default App;
