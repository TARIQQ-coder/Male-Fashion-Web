import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AboutBg from '../assets/AboutBg.jpg'
import { FaQuoteRight } from 'react-icons/fa';
import BackgroundImage1 from '../assets/BackgroundImage1.jpg'
import LakePic from '../assets/LakePic.jpg'
import DiazTeam from '../assets/DiazTeam.jpg'
import ChrisTeam from '../assets/ChrisTeam.jpg'
import GreenTeam from '../assets/GreenTeam.jpg'
import SalomeTeam from '../assets/SalomeTeam.jpg'
import { IoLogoDeviantart,IoLogoGoogle,IoLogoMicrosoft,IoLogoPaypal,IoLogoVimeo } from "react-icons/io5";
import { BiLogoApple,BiLogoDjango,BiLogoFlutter } from "react-icons/bi";

function About() {
  return (
    <div className='mb-20'>
      <div className='bg-[#f3f2ee] py-8 pl-24'>
            <h2 className='text-2xl font-bold my-2'>About Us</h2>
      
            <div className='flex items-center gap-1'>
              <span>Home</span>
              <MdOutlineKeyboardArrowRight className='mt-1' />
              <span className='text-[#b7b9c5]'>About Us</span>
            </div>
          </div>


        <div className='p-12 md:p-22'>

          <div>
            <img src={AboutBg} alt=""  className=' md:h-[550px] md:w-full object-cover'/>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-12'>
            <div className='my-4'>
              <h2 className='text-2xl font-semibold my-2'>Who We Are ?</h2>
              <p>Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example.</p>
            </div>

            <div className='my-4'>
              <h2 className='text-2xl font-semibold my-2'>What We Do ?</h2>
              <p>In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance.</p>
            </div>

            <div className='my-4'>
              <h2 className='text-2xl font-semibold my-2'>Why Choose Us ?</h2>
              <p>A two or three storey house is the ideal way to maximize the piece of earth on which our home sits, but for older or infirm people.</p>
            </div>

          </div>
        </div>

        

      <div className='relative '>

       
            <div className="flex flex-col px-6 py-30 md:py-29 bg-[#f3f2ee] items-center text-center md:items-start">
              <FaQuoteRight className="text-4xl text-red-500 mb-6 md:ml-60" />

              <p className="text-xl italic text-gray-700 max-w-lg md:max-w-sm md:ml-18">
                “Going out after work? Take your butane curling iron with you to the office, heat it up, style your hair before you leave the office and you won’t have to make a trip back home.”
              </p>

              <div className='flex gap-4 mt-6  md:ml-35'>
                <img
                src={BackgroundImage1} // Replace with your image path
                alt="Profile"
                className="w-19 h-19 rounded-full object-cover"/>
                <div>
                  <span className='font-semibold text-lg'>Augusta Schultz</span><br/>
                  <span className='text-[#afab9c] italic font-semibold text-lg'>Fashion Designer</span>
                </div>
              </div>
            </div>
        

        <div className='md:absolute md:w-[675px] right-0 top-0'>
            <img src={LakePic} alt="" className='h-[500px] w-full object-cover object-[10%_95%]'/>
        </div>



       </div> 


       <div className='grid grid-cols-2 p-26 md:grid-cols-4'>

        <div className='flex items-center gap-2'>
          <span className='text-7xl font-semibold text-[#111111]'>102</span>
          <span className='text-lg font-semibold text-[#3d3d3d]'>Our <br/>Clients</span>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-7xl font-semibold text-[#111111]'>30</span>
          <span className='text-lg font-semibold text-[#3d3d3d]'>Total <br/>Categories</span>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-7xl font-semibold text-[#111111]'>102</span>
          <span className='text-lg font-semibold text-[#3d3d3d]'>In <br/>Country</span>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-7xl font-semibold text-[#111111]'>98%</span>
          <span className='text-lg font-semibold text-[#3d3d3d]'>Happy <br/>Customers</span>
        </div>

        
       </div>

        <div className='px-20'>
          <hr className='h-2 text-gray-400'/>
        </div>

        {/* Team */}

        <div>

          <div className='mt-24'>

            <div className='text-center'>
              <h3 className='text-red-500 tracking-widest uppercase font-semibold my-4'>our team</h3>
              <h2 className='text-4xl font-semibold mb-4'>Meet Our Team</h2>
            </div>

            <div className='flex items-center justify-center flex-wrap gap-10 my-16'>
              
              <div className='max-w-[265px] max-h-[470px]'>
                <img src={DiazTeam} alt="Diaz" className='h-[320px] object-cover' />
                <h2 className='text-2xl font-semibold my-4'>John Diaz</h2>
                <p className='text-[#b7bed0]'>Fashion Design</p>
              </div>

              <div className='max-w-[265px] max-h-[470px]'>
                <img src={GreenTeam} alt="Green" className='h-[320px] object-cover' />
                <h2 className='text-2xl font-semibold my-4'>Christine Green</h2>
                <p className='text-[#b7bed0]'>C.E.O</p>
              </div>

              <div className='max-w-[265px] max-h-[470px]'>
                <img src={SalomeTeam} alt="Salome" className='h-[320px] object-cover' />
                <h2 className='text-2xl font-semibold my-4'>Sean Salome</h2>
                <p className='text-[#b7bed0]'>Manager</p>
              </div>

              <div className='max-w-[265px] max-h-[470px]'>
                <img src={ChrisTeam} alt="Chris" className='h-[320px] object-cover' />
                <h2 className='text-2xl font-semibold my-4'>Chris Richards</h2>
                <p className='text-[#b7bed0]'>Delivery</p>
              </div>
            </div>
          </div>
        </div>


              {/* Partners */}
        <div>

          <div className='text-center mt-26 mb-12 '>
              <h3 className='text-red-500 tracking-widest uppercase font-semibold my-4'>partners</h3>
              <h2 className='text-4xl font-semibold mb-4'>Happy Clients</h2>
            </div>

            <div className='flex justify-center items-center '>

                  <div className='grid grid-cols-3 md:grid-cols-4 gap-x-25 gap-y-12 md:gap-x-55'>

                    <div>
                        <IoLogoDeviantart className='w-15 h-15 text-[#b7b7b7] '/>
                        <span className='uppercase text-xs tracking-widest text-[#b7b7b7]'>Company</span>
                    </div>

                    <div>
                        <IoLogoGoogle className='w-15 h-15  '/>
                        <span className='uppercase text-xs tracking-widest'>Company</span>
                    </div>

                    <div>
                        <IoLogoMicrosoft className='w-15 h-15 text-[#b7b7b7] '/>
                        <span className='uppercase text-xs tracking-widest text-[#b7b7b7]'>Company</span>
                    </div>

                    <div>
                        <IoLogoPaypal className='w-15 h-15 '/>
                        <span className='uppercase text-xs tracking-widest'>Company</span>
                    </div>

                    <div>
                        <IoLogoVimeo className='w-15 h-15 text-[#b7b7b7] '/>
                        <span className='uppercase text-xs tracking-widest text-[#b7b7b7]'>Company</span>
                    </div>

                    <div>
                        <BiLogoApple className='w-15 h-15 text-[#b7b7b7] '/>
                        <span className='uppercase text-xs tracking-widest text-[#b7b7b7]'>Company</span>
                    </div>

                    <div>
                        <BiLogoDjango className='w-15 h-15 '/>
                        <span className='uppercase text-xs tracking-widest '>Company</span>
                    </div>

                    <div>
                        <BiLogoFlutter className='w-15 h-15 text-[#b7b7b7] '/>
                        <span className='uppercase text-xs tracking-widest text-[#b7b7b7]'>Company</span>
                    </div>

                  </div>
          </div>
        </div>
       
    </div>
  )
}

export default About