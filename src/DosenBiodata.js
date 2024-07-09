import React, { useState, forwardRef } from 'react';
import budiniImage from './images/budini.jpg';
import budhiahImage from './images/budhiah.jpg';
import pakmahrusImage from './images/pakmahrus.jpg';
import './App.css'; // Pastikan untuk mengimpor CSS yang diperbarui

const DosenBiodata = forwardRef((props, ref) => {
  return (
    <section style={{ backgroundColor: '#ffffff', width: '100%' }} className="pt-12" ref={ref}>
      <div className="container mx-auto max-w-5xl p-4">
        <h1 className="text-3xl font-bold text-center mb-8">DOSEN PENGAMPU</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <img src={budiniImage} alt="Dini Nurmalasari" className="w-40 h-60 rounded-lg mb-2 hover-img" />
            <h2 className="text-xl font-bold mb-2">Dini Nurmalasari, S.T., M.T</h2>
            <p className="text-gray-700">Dosen Data Mining</p>
          </div>
          <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <img src={budhiahImage} alt="Mardhiah Fadli" className="w-40 h-60 rounded-lg mb-2 hover-img" />
            <h2 className="text-xl font-bold mb-2">Mardhiah Fadli, S.T., M.T.</h2>
            <p className="text-gray-700">Dosen Manajemen Proyek</p>
          </div>
          <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <img src={pakmahrusImage} alt="Muhammad Mahrus Zain" className="w-40 h-60 rounded-lg mb-2 hover-img" />
            <h2 className="text-xl font-bold mb-2">Muhammad Mahrus Zain, S.ST., M.T.I.</h2>
            <p className="text-gray-700">Dosen Pemrograman Framework Lanjutan</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default DosenBiodata;
