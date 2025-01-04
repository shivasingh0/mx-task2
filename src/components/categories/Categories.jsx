import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    icon: '/assets/burger.png',
    title: 'Main Dish',
    count: '86 dishes'
  },
  {
    id: 2,
    icon: '/assets/sendwich.png',
    title: 'Break Fast',
    count: '12 break fast'
  },
  {
    id: 3,
    icon: '/assets/icecreem.png',
    title: 'Dessert',
    count: '48 dessert'
  },
  {
    id: 4,
    icon: '/assets/juice.png',
    title: 'Browse All',
    count: '255 items'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FF6868] uppercase font-medium tracking-wide mb-2">
            CUSTOMER FAVORITES
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;