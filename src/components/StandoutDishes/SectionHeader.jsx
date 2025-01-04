import React from 'react';

const SectionHeader = ({ subtitle, title }) => {
  return (
    <div>
      <p className="text-red-500 uppercase font-medium tracking-wide mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl font-bold text-gray-900">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;