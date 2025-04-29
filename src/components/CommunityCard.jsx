import React from 'react';

const CommunityCard = ({ image, title, description, variant = 'grid' }) => {
  if (variant === 'slider') {
    return (
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
          <h3 className="text-white text-3xl font-semibold">{title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[391px] h-[552px] overflow-hidden bg-white shadow-[17px_12px_60px_0_rgba(0,0,0,0.25)] flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-[calc(100%-120px)] object-cover"
      />
      <div className="p-4 bg-white flex-1">
        <p className="text-[#887C68] mb-2">{description}</p>
      </div>
      <div className="bg-[#F8F8F8] p-4">
        <h3 className="text-xl text-[#887C68] ">{title}</h3>
      </div>
    </div>
  );
};

export default CommunityCard;