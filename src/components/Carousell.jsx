import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong,FaXTwitter } from "react-icons/fa6";
import { FaPinterest,FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

// Import local images
import BackgroundImage1 from '../assets/BackgroundImage1.jpg'
import BackgroundImage2 from '../assets/BackgroundImage2.jpg';

// Debug: Log the image imports to verify they are loading
// console.log('Studio Image:', studioImage);
// console.log('Film Set Image:', filmSetImage);
// console.log('Cinema Image:', cinemaImage);

// Define carousel items with local images
const carouselItems = [
  {
    src: BackgroundImage1,
    alt: 'TV Studio',
  },
  {
    src: BackgroundImage2,
    alt: 'Film Set',
  },
];

const Carousell = () => {
  return (
    <section className="relative h-screen">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        className="h-full w-full"
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative w-full h-screen">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-center object-cover md:object-[50%_33%]"
              style={{ display: 'block' }}
              onError={(e) => {
                console.log(`Failed to load image: ${item.alt}`);
                e.target.src = 'https://via.placeholder.com/1200x600/CCCCCC/FFFFFF?text=Image+Not+Found';
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay with Headline, Tagline, and CTA */}
      <div className='absolute top-25'>

          <div className='flex flex-col items-center justify-center h-full max-w-lg gap-16'>
                    <div className='bg-gray-500/90 md:bg-white/50 p-8 rounded-md ml-10 md:ml-8'>
                      <h3 className='text-sm text-red-600 font-bold my-4'>SUMMER COLLECTION</h3>
          
                      <h1 className='text-5xl font-semibold mb-4 text-[#111111]'>Fall - Winter Collection 2030</h1>
          
                      <p className='text-[#2b3c39] mb-4'>A specialist label creating luxury essentials.Ethically crafted with an unwavering commitment to exceptional quality</p>
          
          
                      <Link to="/shop">
                        <div className='w-fit bg-black text-[#efffff] px-8 py-3 flex justify-center items-center gap-2 cursor-pointer'>
                        <button className='text-lg'>
                          Shop Now 
                        </button>
                        <FaArrowRightLong />
                        </div>
                      </Link>
                    </div>
          
                    <div className='flex justify-center items-center gap-4 hover:cursor-pointer'>
                    <FaPinterest className='w-6 h-6' />
                    <FaFacebookF className='w-6 h-6'/>
                    <CiInstagram className='w-6 h-6'/>
                    <FaXTwitter className='w-6 h-6'/>
                  </div>
                  </div>
      </div>
    </section>
  );
};

export default Carousell;