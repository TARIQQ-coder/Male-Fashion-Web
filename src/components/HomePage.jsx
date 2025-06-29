import React from 'react'
import  { useState,useEffect } from 'react';
import BackgroundImage1 from '../assets/BackgroundImage1.jpg'
import BackgroundImage2 from '../assets/BackgroundImage2.jpg'
import { FaArrowRightLong,FaXTwitter } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { FaPinterest,FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Jacket1 from '../assets/Jacket1.png'
import Sunglass from '../assets/Sunglass.png'
import Sneaker from '../assets/Sneaker.png'
import SalesJacket1 from '../assets/SalesJacket1.png'
import SalesJacket2 from '../assets/SalesJacket2.png'
import SalesCap1 from '../assets/SalesCap1.png'
import SalesCap2 from '../assets/SalesCap2.png'
import SalesCap3 from '../assets/SalesCap3.png'
import SalesShoe1 from '../assets/SalesShoe1.png'
import SalesShoe2 from '../assets/SalesShoe2.png'
import SalesShoe3 from '../assets/SalesShoe3.png'
import SalesBag1 from '../assets/SalesBag1.png'
import SalesHoodie from '../assets/SalesHoodie.png'
import SalesHat from '../assets/SalesHat.png'
import SalesBoot from '../assets/SalesBoot.png'
import SalesScarf from '../assets/SalesScarf.png'
import WatchCollection from '../assets/WatchCollection.jpg'
import MaleOutfit from '../assets/MaleOutfit.jpg'
import DinnerSetting from '../assets/DinnerSetting.jpg'
import SingletCollection from '../assets/SingletCollection.jpg'
import BagCollection from '../assets/BagCollection.jpg'
import OutfitOnChair from '../assets/OutfitOnChair.jpg'
import CoffeePic from '../assets/CoffeePic.jpg'
import RoundPic from '../assets/RoundPic.jpg'
import LakePic from '../assets/LakePic.jpg'




const productData = {
  // The properties (keys) of productData like "Best Sellers", "New Arrivals", and "Hot Sales" are named that way for semantic clarity and UI relevance.These strings match the tab titles users will see in the UI when object.keys(productData) is called to generate the tabs.
  "Best Sellers": [
    { name: "Piqué Biker Jacket", price: "$67.24", image: `${SalesJacket1}` },
    { name: "Diagonal Leather Jacket", price: "$60.90", image: `${SalesJacket2}`,tag: "SALE", rating: 3 },
    { name: "Simon Baker Cap", price: "$67.24", image: `${SalesCap1}`,tag: "SALE", rating: 4 },
    { name: "Nike Max Shoe", price: "$60.90", image: `${SalesShoe1}` },
    { name: "Nike Max Shoe Green", price: "$67.24", image: `${SalesShoe3}` },
    { name: "Diagonal Leather Jacket", price: "$60.90", image: `${SalesBag1}`,tag: "SALE", rating: 4 },
    { name: "Piqué Biker Cap", price: "$67.24", image: `${SalesCap2}` },
    { name: "Dopamine Honnex Canvas", price: "$60.90", image: `${SalesShoe2}` }
  ],
  "New Arrivals": [
    { name: "Winter Hoodie", price: "$72.00", image: `${SalesHoodie}`,rating: 3 },
    { name: "Wool Hat", price: "$24.50", image: `${SalesHat}`,rating: 4 },
    { name: "Nike Max Shoe", price: "$60.90", image: `${SalesShoe1}` },
    { name: "Piqué Biker Cap", price: "$67.24", image: `${SalesCap2}` }
  ],
  "Hot Sales": [
    { name: "Ankle Boots", price: "$98.49", image: `${SalesBoot}`, tag: "SALE", rating: 4 },
    { name: "Basic Flowing Scarf", price: "$26.28", image: `${SalesScarf}` },
    { name: "Nike Max Shoe", price: "$60.90", image: `${SalesShoe1}` },
    { name: "Nike Max Shoe Green", price: "$67.24", image: `${SalesShoe3}` }
  ]
};

const HomePage = () => {

  const calculateTimeLeft = () => {
    const dealEndDate = new Date(); // Set this to your desired deal end date
    dealEndDate.setDate(dealEndDate.getDate() + 29); // Example: 29 days from now

    const difference = dealEndDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / (1000 * 60)) % 60),
        Seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [activeTab, setActiveTab] = useState("Hot Sales");

  return (
    <div className='mb-50'>

      <div className="h-screen w-full bg-cover bg-[10%_35%]" style={{backgroundImage: `url(${BackgroundImage1})`}}>

        <div className='flex flex-col items-center justify-center h-full max-w-lg gap-16'>
          <div className='bg-gray-500/90 md:bg-white/50 p-8 rounded-md ml-10 md:ml-8'>
            <h3 className='text-sm text-red-600 font-bold my-4'>SUMMER COLLECTION</h3>

            <h1 className='text-5xl font-semibold mb-4 text-[#111111]'>Fall - Winter Collection 2030</h1>

            <p className='text-[#2b3c39] mb-4'>A specialist label creating luxury essentials.Ethically crafted with an unwavering commitment to exceptional quality</p>

            <div className='w-fit bg-black text-[#efffff] px-8 py-3 flex justify-center items-center gap-2 cursor-pointer'>
            <button className='text-lg'>
              Shop Now 
            </button>
            <FaArrowRightLong />
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 hover:cursor-pointer'>
           <FaPinterest className='w-6 h-6' />
           <FaFacebookF className='w-6 h-6'/>
           <CiInstagram className='w-6 h-6'/>
           <FaXTwitter className='w-6 h-6'/>
        </div>
        </div>
      </div>


            {/* first display of products */}
      <div className='md:flex justify-end mt-16 md:mr-42 gap-8'>
        <div className='relative group '>
          <div className='w-[440px] h-[400px] mx-auto flex flex-col items-center bg-[#f1eff2]'>
          <img src={Jacket1} alt="Jacket1" className='max-w-[300px]' />
          </div>

          <div className=' mt-8 md:absolute md:top-15 -left-50 max-w-md mx-auto'>
            <h2 className='text-4xl font-semibold md:max-w-xs text-[#111111]'>Clothing Collections 2030</h2>
            <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest">
              SHOP NOW
          </button>
          </div>
        </div>
      </div>


      <div className='md:flex justify-start mt-16 md:ml-42 gap-8 md:-mt-20 ' >
        <div className='relative group '>
          <div className='w-[440px] h-[400px] mx-auto flex flex-col items-center bg-[#f1eff2]'>
          <img src={Sunglass} alt="Jacket1" className='max-w-[390px]' />
          </div>

          <div className=' mt-4 max-w-md mx-auto'>
            <h2 className='text-4xl font-semibold md:max-w-xs text-[#111111]'>Accessories</h2>
            <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest">
              SHOP NOW
          </button>
          </div>
        </div>
      </div>

      <div className='md:flex justify-end mt-16 md:-mt-80 md:mr-30 gap-8'>
        <div className='relative group '>
          <div className='w-[440px] h-[350px] mx-auto flex flex-col items-center bg-[#f1eff2]'>
          <img src={Sneaker} alt="Jacket1" className='max-w-[250px]' />
          </div>

          <div className=' mt-8 md:absolute md:top-15 -left-40 max-w-md mx-auto'>
            <h2 className='text-4xl font-semibold md:max-w-[200px] text-[#111111] '>Shoes Spring 2030</h2>
            <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest">
              SHOP NOW
          </button>
          </div>
        </div>
      </div>


      {/* second display of products */}

      <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-8">
        {Object.keys(productData).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-semibold transition-colors duration-300  ${
              activeTab === tab ? 'text-black' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 mb-10">
        {productData[activeTab].map((product, index) => (
          <div key={index} className="transform transition-transform duration-300 hover:scale-105">
            <div className="relative bg-[#edeef5] p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* th reason why we choose short-circuit logic (&&) is because we want to render the product tag only if it exists and nothing else ie. (no else part needed) */}
              {product.tag && (
                <span className="absolute top-6 left-0 bg-black text-white text-xs px-5 py-1 tracking-widest">
                  {product.tag}
                </span>
              )}
              <img src={product.image} alt={product.name} className="mx-auto w-40 h-40 object-contain transition-opacity duration-300" />
            </div>
            <h3 className="mt-4 text-sm font-medium">{product.name}</h3>

            {/* Optional star rating */}
            {/* the reason we used a ternary operator here unlike the short-circuit (&&) we used above is that we want to render something in both cases (when product.rating exists and when it doesn't) */}
            {product.rating ? (
              <div className="text-orange-400 mt-1">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
            ) : (
              <div className="text-gray-300 mt-1">☆☆☆☆☆</div>
            )}

            <p className="mt-1 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>


        {/* TimeClock zone */}

        <div className='bg-[#f3f2ee] md:grid grid-cols-3 mb-16'>

              <div className='flex justify-center items-center gap-4 mt-16'>
                <div className='flex flex-col justify-center gap-2'>
                  <p className='text-4xl text-[#b7b7b7] font-semibold'>Clothings Hot</p>
                  <p className='text-5xl font-bold'>Shoe Collection</p>
                  <p className='text-4xl text-[#b7b7b7] font-semibold'>Accessories</p>
                </div>
              </div>


              <div className='flex justify-center items-center'>
                <div className='relative'>
                <img src={SalesBag1} alt="salesBag1" className='max-w-[350px]' />
                <div className="bg-black text-white px-5 py-7 text-center rounded-full inline-flex items-center justify-center min-w-[100px] min-h-[100px] absolute top-30 left-62">
                <p className="text-sm leading-tight text-center">
                  Sale Of <br />
                  <span className="font-bold text-xl">$29.99</span>
                </p>
              </div>
                </div>
              </div>


            <div className='flex justify-center items-center md:mt-16'>

              <div className=" p-10 rounded-md max-w-lg mx-auto">
                <p className="text-red-500 font-semibold tracking-widest mb-4">DEAL OF THE WEEK</p>
                <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
                  Multi-pocket Chest Brown Black
                </h2>

                <div className="flex items-center gap-6 my-8">
                  {['days', 'hours', 'Minutes', 'Seconds'].map((unit, i) => (
                    <div key={i} className="text-center">
                      <div className="text-5xl font-semibold">
                        {String(timeLeft[unit]  || 0).padStart(2, '0')}
                      </div>
                      <div className=" text-lg mt-1 text-gray-500">{unit}</div>
                    </div>
                  ))}
                </div>

                    <button className="bg-black text-white tracking-widest px-8 py-3 font-semibold hover:bg-gray-800 transition-all duration-300">
                      SHOP NOW
                    </button>
                  </div>
            </div>
        </div>

        {/* Instagram Feed */}

              <div className='md:flex justify-center items-center'>

                  <div className='max-w-4xl mx-auto'>
                      <div className='flex justify-center items-center flex-wrap'>

                        <div>
                          <img src={WatchCollection} alt="WatchCollection" className='w-[250px] h-[260px] object-cover'/>
                        </div>

                        <div>
                          <img src={MaleOutfit} alt="MaleOutfit" className='w-[250px] h-[260px] object-cover' />
                        </div>

                        <div>
                          <img src={DinnerSetting} alt="DinnerSetting" className='w-[250px] h-[260px] object-cover'/>
                        </div>

                        <div>
                          <img src={SingletCollection} alt="SingletCollection" className='w-[250px] h-[260px] object-cover'/>
                        </div>

                        <div>
                          <img src={BagCollection} alt="BagCollection" className='w-[250px] h-[260px] object-cover'/>
                        </div>

                        <div>
                          <img src={OutfitOnChair} alt="OutfitOnChair" className='w-[250px] h-[260px] object-cover'/>
                        </div>
                      </div>
                  </div>


                  <div className='max-w-lg mx-auto '>
                    <div>
                      <h1 className='text-4xl font-semibold py-8'>Instagram</h1>

                      <p className='text-[#818a88] my-10'>Explore our Instagram to discover a variety of stylish male <br/> outfits tailored to suit your unique fashion preferences and vibe.<br/>Look us up on X, Facebook and other social media platforms</p>

                      <p className='text-red-600 text-3xl font-semibold py-8'>#Male_Fashion</p>
                    </div>
                  </div>
              </div>


                    {/* Latest fashion trends */}

            <div className='my-20'>

              <h2 className='font-semibold text-red-500 tracking-widest text-center my-4'>LATEST NEWS</h2>

              <p className='text-4xl font-semibold text-center mb-12'>Fashion New Trends</p>

              <div className='flex justify-center items-center flex-wrap md:pl-20 md:pr-20'>

                  <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0'>

                    <div className='w-fit mx-auto'>
                      <img src={CoffeePic} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                    </div>

                    <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                      <div>
                          <div className='flex justify-start items-center gap-2 text-sm'>
                            <CiCalendar />
                            <span>28 June 2025</span>
                          </div>
                          <p className='text-xl font-semibold my-4'>
                            What Curling Irons Are The Best Ones
                          </p>
                          <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest">
                            READ MORE
                          </button>
                      </div>
                    </div>
                  </div>



                  <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0'>
                    <div className='w-fit mx-auto'>
                      <img src={RoundPic} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                    </div>

                    <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                      <div>
                          <div className='flex justify-start items-center gap-2 text-sm'>
                            <CiCalendar />
                            <span>1 July 2025</span>
                          </div>
                          <p className='text-xl font-semibold my-4'>
                            Eternity Bands Do Last Forever
                          </p>
                          <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest">
                            READ MORE
                          </button>
                      </div>
                    </div>
                  </div>



                  <div className='max-w-[360px] relative group mx-auto'>
                    <div className='w-fit mx-auto'>
                      <img src={LakePic} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                    </div>

                    <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                      <div>
                          <div className='flex justify-start items-center gap-2 text-sm'>
                            <CiCalendar />
                            <span>5 July 2025</span>
                          </div>
                          <p className='text-xl font-semibold my-4'>
                            The Health Benefits of Sunglasses
                          </p>
                          <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest">
                            READ MORE
                          </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>        



    </div>
  )
}

export default HomePage