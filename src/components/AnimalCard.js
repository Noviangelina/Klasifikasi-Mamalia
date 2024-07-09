// AnimalCard.js
import React from 'react';

const AnimalCard = ({ title, description, icon }) => {
  return (
    <div className="animal-card bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4 text-center">
      <img src={icon} alt={title} className="w-16 h-16 mb-2" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AnimalCard;
