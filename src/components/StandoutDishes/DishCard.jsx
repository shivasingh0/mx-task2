import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoHeart } from 'react-icons/io5';

const DishCard = ({ image, title, description, price, rating }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-md transition-all">
      <div className="relative">
        <div className='flex justify-center h-48'>
        <img 
          src={image} 
          alt={title} 
          className="h-48 object-cover rounded-lg"
        />
        </div>
        <button
          className="absolute -top-6 -right-6 p-2 bg-[#39DB4A] rounded-es-[25px] rounded-se-[25px] hover:bg-primary text-white transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <IoHeart className="w-9 h-7" />
          ) : (
            <IoMdHeartEmpty className="w-9 h-7" />
          )}
        </button>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <span className="text-red-500 text-sm">$</span>
            <span className="text-xl font-bold text-gray-900">{price}</span>
          </div>
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <span className="ml-1 text-gray-600">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;