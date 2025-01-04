import React from 'react';

const CategoryCard = ({ icon, title, count }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="bg-[#c1f1c6] p-4 rounded-full mb-3">
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm font-semibold text-gray-500">({count})</p>
      </div>
    </div>
  );
};

export default CategoryCard;