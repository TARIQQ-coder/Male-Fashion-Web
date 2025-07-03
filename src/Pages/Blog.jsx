import React from 'react'
import BlogBg from '../assets/BlogBg.jpg'
import { CiCalendar } from "react-icons/ci";
import CoffeePic from '../assets/CoffeePic.jpg'
import RoundPic from '../assets/RoundPic.jpg'
import LakePic from '../assets/LakePic.jpg'
import Timberlands from '../assets/Timberlands.jpg'
import WovenCloth from '../assets/WovenCloth.jpg'
import PeopleOnSidewalk from '../assets/PeopleOnSidewalk.jpg'
import CatOnSidewalk from '../assets/CatOnSidewalk.jpg'
import FashionShop from '../assets/FashionShop.jpg'

function Blog() {
  return (
    <div className=' mb-40'>

      <div style={{backgroundImage: `url(${BlogBg})`}} className='w-full h-[350px] bg-cover'>
        <div className='flex justify-center items-center h-full'>
            <h1 className='text-white text-6xl font-semibold'>Our Blog</h1>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap md:pl-20 md:pr-20 mt-24 md:gap-y-42'>
      
                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl'>
      
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
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>
      
      
      
                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl'>
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
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>
      
      
      
                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl '>
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
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>

                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl'>
      
                          <div className='w-fit mx-auto'>
                            <img src={BlogBg} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                          </div>
      
                          <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                            <div>
                                <div className='flex justify-start items-center gap-2 text-sm'>
                                  <CiCalendar />
                                  <span>16 July 2025</span>
                                </div>
                                <p className='text-xl font-semibold my-4'>
                                  Aiming For Higher The Mastopexy
                                </p>
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>
      
      
      
                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl'>
                          <div className='w-fit mx-auto'>
                            <img src={WovenCloth} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                          </div>
      
                          <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                            <div>
                                <div className='flex justify-start items-center gap-2 text-sm'>
                                  <CiCalendar />
                                  <span>21 July 2025</span>
                                </div>
                                <p className='text-xl font-semibold my-4'>
                                  Wedding Rings A Gift For A Lifetime
                                </p>
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>
      
      
      
                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl'>
                          <div className='w-fit mx-auto'>
                            <img src={PeopleOnSidewalk} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                          </div>
      
                          <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                            <div>
                                <div className='flex justify-start items-center gap-2 text-sm'>
                                  <CiCalendar />
                                  <span>28 July 2025</span>
                                </div>
                                <p className='text-xl font-semibold my-4'>
                                  The Different Methods Of Hair Removal
                                </p>
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl'>
      
                          <div className='w-fit mx-auto'>
                            <img src={CatOnSidewalk} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                          </div>
      
                          <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                            <div>
                                <div className='flex justify-start items-center gap-2 text-sm'>
                                  <CiCalendar />
                                  <span>12 August 2025</span>
                                </div>
                                <p className='text-xl font-semibold my-4'>
                                  Hoop Earrings A Style From History
                                </p>
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>
      
      
      
                        <div className='max-w-[360px] relative group mx-auto mb-38 md:mb-0 transition-shadow duration-300 hover:shadow-xl'>
                          <div className='w-fit mx-auto'>
                            <img src={FashionShop} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                          </div>
      
                          <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                            <div>
                                <div className='flex justify-start items-center gap-2 text-sm'>
                                  <CiCalendar />
                                  <span>19 August 2025</span>
                                </div>
                                <p className='text-xl font-semibold my-4'>
                                  Lasik Eye Surgery Are You Ready
                                </p>
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>
      
      
      
                        <div className='max-w-[360px] relative group mx-auto transition-shadow duration-300 hover:shadow-xl'>
                          <div className='w-fit mx-auto'>
                            <img src={Timberlands} alt="CoffeePic" className='w-[360px] h-[275px] object-cover'/>
                          </div>
      
                          <div className='w-[300px] mx-auto py-6 px-8 bg-white absolute left-7 top-59'>
                            <div>
                                <div className='flex justify-start items-center gap-2 text-sm'>
                                  <CiCalendar />
                                  <span>23 August 2025</span>
                                </div>
                                <p className='text-xl font-semibold my-4'>
                                  The Health Benefits of Timberlands
                                </p>
                                <button className="relative text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all after:duration-300 group-hover:after:w-1/2 group-hover:after:bg-orange-500 pb-1 cursor-pointer tracking-widest group-hover:transition-shadow duration-300 hover:shadow-xl">
                                  READ MORE
                                </button>
                            </div>
                          </div>
                        </div>

                        
                    </div>

    </div>
  )
}

export default Blog