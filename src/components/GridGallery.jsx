import React from 'react';
import CommunityCard from './CommunityCard';

const GridGallery = ({ communities }) => (
  <div className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[8rem] px-4 pt-8">
    {communities.map((community, idx) => (
        <CommunityCard
          key={idx}
          image={community.image}
          title={community.title}
          description={community.description}
        />
      ))}
    </div>
  </div>
);

export default GridGallery;
