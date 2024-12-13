import React from 'react'
import MySelect from './Select'
import { Button } from 'antd'
import { Collapse } from 'antd';

function Contact() {

  const Items = [
    {
      img: "image/Influencer.png",
      heading: "Become an Influencer",
      des: "Join a company that’s passionate about design and technology",
      website: "chills@chillsbay.com",
    },
    {
      img: "image/help.png",
      heading: "Need Help?",
      des: "Questions about using  Market? Our support team is here to help.",
      website: "chillsbay",
    },
    {
      img: "image/refound.png",
      heading: "Refunds & Others",
      des: "Join a company that’s passionate about design and technology",
      website: "chills@chillsbay.com",
    },
  ]

  const text = `
 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
`;
  const text1 = `
 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
`;
  const text2 = `
 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
`;
  const text3 = `
 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
`;

  const items = [
    {
      key: '1',
      label: 'Do you offer refunds for purchased products?',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'How does Chillsbay work?',
      children: <p>{text1}</p>,
    },
    {
      key: '3',
      label: 'Can I pay with Crypto on Chillsbay.com? ',
      children: <p>{text2}</p>,
    },
    {
      key: '4',
      label: 'How can I become a Chillsbay Host?',
      children: <p>{text3}</p>,
    },
  ];


  return (
    <section>
      <div className='lg:w-[70%] mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center p-6 md:p-12'>
          {/* Left section */}
          <div className=' w-full lg:w-1/2 text-center lg:text-start mb-8 '>
            <h2 className='text-[#26395C] text-2xl lg:text-4xl font-bold mb-4 md:mt-12'>Contact Us</h2>
            <p className='w-[60%] text-[#26395C] mx-auto lg:mx-0 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.</p>
            <div className='w-[50%] mx-auto lg:w-full lg:mx-0 '>
              <div className='flex items-start gap-3'>
                <img src="image/phone.png" alt="Phone" />
                <p className='text-[#26395C]' >(840) 371 - 2514</p>
              </div>
              <div className='flex items-start gap-3'>
                <img src="image/mail.png" alt="Email" />
                <p className='text-[#26395C]'>chills@chillsbay.com</p>
              </div>
            </div>
          </div>
          {/* Right section */}
          <div className='lg:w-1/2 w-full bg-white p-6 rounded-2xl shadow-xl'>
            <form className='space-y-8'>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                  <div className='space-y-2 text-[#26395C]'>
                    <label>First Name</label>
                    <input type="text" placeholder='First Name' className='border py-2 px-5 rounded-lg  border-blue-200 w-full' />
                  </div>
                  <div className='space-y-2 text-[#26395C]'>
                    <label>Last Name</label>
                    <input type="text" placeholder='Last Name' className='border py-2 px-5 rounded-lg  border-blue-200 w-full' />
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='space-y-2 text-[#26395C]'>
                    <label>Email Address</label>
                    <input type="email" placeholder='e.g. johndoe@email.com' className='border py-2 px-5 rounded-lg  border-blue-200 w-full' />
                  </div>
                  <div className='space-y-2 text-[#26395C]'>
                    <label>Phone number</label>
                    <input type="number" placeholder='Phone Number' className='border py-2 px-5 rounded-lg  border-blue-200 w-full' />
                  </div>
                </div>
                <div>
                  <MySelect />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-[#26395C]'>Message</label>
                  <textarea className='bg-gray-50 rounded-lg p-2' name="" id=""></textarea>
                </div>
                <Button type='primary' size="large">SEND MESSAGE</Button>
              </div>
            </form>
          </div>
        </div>

        {/* Card Section */}
        <div className='mt-24 mb-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              Items.map((item, index) => (
                <div key={index} className='text-center justify-center items-center mx-auto'>
                  <img className=' object-cover rounded-xl mx-auto' src={item.img} alt="" />
                  <h3 className='text-[#26395C] font-semibold text-[22px] mt-8 mb-6'>{item.heading}</h3>
                  <p className='text-[#656B89] mb-4 w-[60%] mx-auto'>{item.des}</p>
                  <a href="" className='text-[#0E8BFF]'>{item.website}</a>
                </div>
              ))
            }
          </div>
        </div>

        {/* Accordion section */}
        <div className='w-full p-24 bg-[#FBFCFF]'>
          <div className='lg:w-[70%] mx-auto'>
            <h1 className='text-[#26395C] text-xl lg:text-[32px] font-bold text-center mb-6'>Frequently Asked Questions</h1>
            <p className='text-[#656B89] w-[85%] mx-auto text-center mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis tristique morbi.</p>
            <Collapse accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
