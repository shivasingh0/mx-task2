import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Dive into Delights
              <br />
              Of Delectable <span className="text-[#39db4a]">Food</span>
            </h1>
            <p className="text-gray-600 mb-8 text-base sm:text-lg font-semibold max-w-md mx-auto md:mx-0 mt-5">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button text="Order Now" />
              <button className="flex items-center justify-center space-x-2 text-gray-800 hover:text-primary w-full sm:w-auto">
                <span>Watch Video</span>
                <TbPlayerPlayFilled
                  className="bg-white shadow-lg rounded-full p-3"
                  size={40}
                />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              className="absolute top-10 -left-10 z-10 w-20 md:w-[200px]"
              src="/assets/chilly.png"
              alt=""
            />
            <div className="bg-[#53ec62] rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] relative">
              <img
                src="/assets/hero.png"
                alt="Food"
                className="absolute right-[50px] sm:right-[100px] scale-[1.4] sm:scale-[1.6] bottom-[50px] sm:bottom-[100px]"
              />
            </div>
            {/* Food Cards */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start relative gap-4 -top-14 p-2">
              <div className="bg-white rounded-xl w-full sm:w-[250px] h-fit shadow-2xl p-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/hero1.png"
                    alt="Spicy noodles"
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div className="flex flex-col flex-1">
                    <h3 className="font-medium text-base">Spicy noodles</h3>
                    <div className="flex items-center gap-1 my-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "fill-yellow-400" : "fill-gray-200"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-base font-semibold">
                      <span className="text-sm text-gray-500">$</span>
                      18.00
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl w-full sm:w-[250px] h-fit shadow-2xl p-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/hero2.png"
                    alt="Vegetarian salad"
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div className="flex flex-col flex-1">
                    <h3 className="font-medium text-base">Vegetarian salad</h3>
                    <div className="flex items-center gap-1 my-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "fill-yellow-400" : "fill-gray-200"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-base font-semibold">
                      <span className="text-sm text-gray-500">$</span>
                      23.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
