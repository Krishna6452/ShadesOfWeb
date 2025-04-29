import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CommunityCard from './CommunityCard';

const CarouselGallery = ({ communities = [] }) => {
  if (!communities || communities.length === 0) {
    return null;
  }

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute right-[-4px] top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all focus:outline-none"
        aria-label="Next"
      >
        <FaChevronRight className="text-gray-700 text-xl" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute left-[-4px] top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all focus:outline-none"
        aria-label="Previous"
      >
        <FaChevronLeft className="text-gray-700 text-xl" />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <section className="mt-16 w-full px-12 mx-auto relative">
      <h2 className="font-martel-sans text-[28px] leading-none tracking-normal uppercase text-[#887C68] text-center mb-8 sans-serif">
        OUR SERVICES
      </h2>
      <div className="relative w-[calc(100%-80px)] mx-auto">
      <Slider {...settings}>
  {communities.map((community, idx) => (
    <div key={`${community.title}-${idx}`} className="px-3 outline-none">
      <CommunityCard 
        image={community?.image || ''}
        title={community?.title || 'Community'}
        variant="slider"
      />
    </div>
  ))}
</Slider>

      </div>
    </section>
  );
};

CarouselGallery.propTypes = {
  communities: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default CarouselGallery;