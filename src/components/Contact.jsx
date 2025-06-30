import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="w-full h-[450px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31764.24355789902!2d-0.18350080000000002!3d5.636096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1751297113778!5m2!1sen!2sgh" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full border-0'></iframe>
      </div>

      <div className='p-20 md:grid grid-cols-2'>

          <div>
            <h4 className='uppercase tracking-widest text-red-500 font-semibold my-3'>information</h4>

            <div>
              <h1 className='text-5xl font-semibold my-4'>Contact Us</h1>
              <p className='font-light text-[#81807b]'>As you might expect of a company that began as a high-end interiors <br/>contractor, we pay strict attention.</p>
            </div>

            <div>
              <h1 className='text-3xl font-semibold mb-4 mt-8'>America</h1>
              <p className='font-light text-[#81807b]'>195 E Parker Square Dr, Parker, CO 801<br/> +43 982-314-0958</p>
            </div>

            <div>
              <h1 className='text-3xl font-semibold mb-4 mt-8'>France</h1>
              <p className='font-light text-[#81807b]'>109 Avenue Leon ,63 East Legon<br/> +233 53-7666-717</p>
            </div>
          </div>

          <div className='mt-12'>

              <div className='flex flex-wrap gap-8 md:grid grid-cols-2 mb-8'>
                <input type="text" placeholder='Name'className='border py-3 px-4 w-full border-[#e1e1e1] placeholder-[#d0beb7] outline-none'/>
                <input type="text" placeholder='Email' className='border py-3 px-4 w-full border-[#e1e1e1] placeholder-[#d0beb7] outline-none'/>
                <textarea name="" id="" placeholder='Message' rows='4' cols='70' className='border px-4 py-6 border-[#e1e1e1] placeholder-[#d0beb7] outline-none col-span-2'></textarea>
              </div>

              <button className='border uppercase py-3 px-8 text-white bg-black tracking-widest cursor-pointer'>Send Message</button>
          </div>


      </div>
    </div>
  )
}

export default Contact