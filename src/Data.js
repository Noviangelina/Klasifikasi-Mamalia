import React, { useState, forwardRef } from 'react';
import './App.css'; // Buat file Data.css untuk styling
import MamaliaBertelur from './images/mamalia bertelur.png';
import MamaliaBerkantung from './images/mamalia berkantung.png';
import MamaliaBerplasenta from './images/mamalia berplasenta.png';

const Data = forwardRef((props, ref) => {
  // State untuk menyimpan status hover dari masing-masing kontainer
  const [bertelurHovered, setBertelurHovered] = useState(false);
  const [berkantungHovered, setBerkantungHovered] = useState(false);
  const [berplasentaHovered, setBerplasentaHovered] = useState(false);

  // Handler untuk mengatur hover state
  const handleBertelurHover = () => {
    setBertelurHovered(!bertelurHovered); // Toggle state
  };

  const handleBerkantungHover = () => {
    setBerkantungHovered(!berkantungHovered); // Toggle state
  };

  const handleBerplasentaHover = () => {
    setBerplasentaHovered(!berplasentaHovered); // Toggle state
  };

  return (
    <div className="container mx-auto mt-10" ref={ref}>
      <h1 className="text-3xl font-bold mb-5 text-center">DATA</h1>
      <p className="text-center mb-10">Jenis Hewan Mamalia</p>
      <div className="grid grid-cols-3 gap-10">
        {/* Mamalia Bertelur */}
        <div
          className={`bg-white shadow-md rounded-md p-6 bg-container ${
            bertelurHovered ? 'hovered' : ''
          }`}
          onMouseEnter={handleBertelurHover}
          onMouseLeave={handleBertelurHover}
        >
          <img
            src={MamaliaBertelur}
            alt="Mamalia Bertelur"
            className="w-full h-48 object-contain rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-3">Mamalia Bertelur</h2>
          <ul className="custom-list ml-6">
            <li className="text-black">Bertelur</li>
            <li className="text-black">Kelenjar Susu</li>
            <li className="text-black">Cloaca</li>
            <li className="text-black">
              Suhu Tubuh berkisar antara 30-32 derajat Celsius.
            </li>
          </ul>
        </div>

        {/* Mamalia Berkantung */}
        <div
          className={`bg-white shadow-md rounded-md p-6 bg-container ${
            berkantungHovered ? 'hovered' : ''
          }`}
          onMouseEnter={handleBerkantungHover}
          onMouseLeave={handleBerkantungHover}
        >
          <img
            src={MamaliaBerkantung}
            alt="Mamalia Berkantung"
            className="w-full h-48 object-contain rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-3">Mamalia Berkantung</h2>
          <ul className="custom-list ml-6">
            <li className="text-black">Mengandung Anak dalam Kantung</li>
            <li className="text-black">Menyusui Anak dalam Kantung</li>
            <li className="text-black">Kantung pada Betina</li>
            <li className="text-black">Mengatur Suhu Tubuh</li>
          </ul>
        </div>

        {/* Mamalia Berplasenta */}
        <div
          className={`bg-white shadow-md rounded-md p-6 bg-container ${
            berplasentaHovered ? 'hovered' : ''
          }`}
          onMouseEnter={handleBerplasentaHover}
          onMouseLeave={handleBerplasentaHover}
        >
          <img
            src={MamaliaBerplasenta}
            alt="Mamalia Berplasenta"
            className="w-full h-48 object-contain rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-3">Mamalia Berplasenta</h2>
          <ul className="custom-list ml-6">
            <li className="text-black">Memiliki Plasenta</li>
            <li className="text-black">Mengandung Anak dalam Rahim</li>
            <li className="text-black">Menyusui Anak</li>
            <li className="text-black">Mengatur Suhu Tubuh</li>
            <li className="text-black">Mengatur Perkembangan Janin</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Data;
