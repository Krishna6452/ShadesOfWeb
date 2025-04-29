import React, { useEffect, useState } from 'react';
import GridGallery from './components/GridGallery';
import CarouselGallery from './components/CarouselGallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [communities, setCommunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const localCommunities = [
    {
      image: "/images/Homepage-hero2compressed-1.jpg.webp",
      title: "Arabian Ranches",
      description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and"
    },
    {
      image: "/images/dtd-hero-desktop.jpg",
      title: "Arabian Ranches II",
      description: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and"
    },
    {
      image: "/images/Hero1.jpg",
      title: "Downtown Dubai",
      description: "The Centre of Now. The most prestigious square kilometre .The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community."
    },
    {
      image: "/images/Hero2Dubaimarina.png",
      title: "Dubai Hills Estate",
      description: "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City."
    },
    {
      image: "/images/HERO7.jpg",
      title: "Dubai Marina",
      description: "Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water."
    },
    {
      image: "/images/DHEoption3.jpg",
      title: "Emirates Living",
      description: "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCommunities(localCommunities);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen py-16 ">
<h1 className="font-martel-sans text-[28px] leading-none tracking-normal uppercase text-[#887C68] text-center mb-8 sans-serif">
  COMMUNITIES WE MANAGE
</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          {communities.length > 0 && (
            <>
              <GridGallery communities={communities.slice(0, 6)} />
              <CarouselGallery communities={communities.slice(0, 6)} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;