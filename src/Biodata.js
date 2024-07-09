import React, { useState, forwardRef } from 'react';
import nopiImage from './images/nop.png';
import jumiImage from './images/jumi.png';
import './App.css'; // Pastikan untuk mengimpor CSS yang diperbarui

const Biodata = forwardRef((props, ref) => {
  return (
    <section style={{ backgroundColor: '#F8F8F8', width: '100%' }} ref={ref}>
      <div className="container mx-auto max-w-5xl p-4">
        <h1 className="text-3xl font-bold text-center mb-8">TEAM</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <img src={nopiImage} alt="Novi Angelina" className="w-30 h-40 rounded-lg mb-2 hover-img" />
            <h2 className="text-xl font-bold mb-2">Novi Angelina</h2>
            <p className="text-gray-700">2257301107</p>
          </div>
          <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <img src={jumiImage} alt="Fitri Irma Yanti" className="w-30 h-40 rounded-lg mb-2 hover-img" />
            <h2 className="text-xl font-bold mb-2">Fitri Irma Yanti</h2>
            <p className="text-gray-700">2257301049</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Biodata;
