import React, { useState } from 'react'
import { Button, Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1Water Sports
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Day Parties
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Outdoors
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Rentals
      </a>
    ),
  },
];



function Navbar() {

  const [isVisible, setIsVisible] = useState(false);



  return (
    <nav>
        <div>
            {/* desktop mood */}
            <div  className='container mx-auto px-3 md:px-0 flex items-center justify-between '>
                <img src="image/MLogo.png" alt="Chills-Bay" />
                <div className='hidden lg:flex items-center lg:gap-5 xl:gap-10'>
                    <div>
                        <Button  className='text-[18px] font-redhat border-none'>Eat & Drink</Button>
                    </div>
                    <div>
                        <Button  className='text-[18px] font-redhat border-none'>Club</Button>
                    </div>
                    <div>
                    <Space direction="vertical">
                   <Dropdown menu={{
               items,
                }}
            placement="bottom"
             arrow >
               <Button  className='text-[18px] font-redhat border-none'>Things to do</Button>
              </Dropdown> </Space> 
                    </div>
                    <div>
                        <img src="image/Shopping.png" alt="Shopping" />
                    </div>
                    <div className='flex items-center'>
                        <img src="image/User.png" alt="User" />
                        <Button  className='text-[18px] font-redhat border-none' >Account</Button>
                    </div>
                    <div>
                        <button className='font-semibold text-base bg-[#0E8BFF] hover:bg-[#1285f1] py-2.5 px-5 rounded-xl text-white border-none transition '>Contact Now</button>
                    </div>
                </div>
               <div className='lg:hidden '>
                  <button className='toggleBtn ' >
                  <img   src="image/Menubar.png" alt="" />
                  </button>
               </div>
            </div>
        </div>
        {/* Mobile menu */}
        <div>
        <div className=' content container mx-auto hidden  space-y-[30px] px-4'>
                    <div>
                        <Button  className='text-[18px] font-redhat border-none'>Eat & Drink</Button>
                    </div>
                    <div>
                        <Button  className='text-[18px] font-redhat border-none'>Events</Button>
                    </div>
                    <div>
                        <Button  className='text-[18px] font-redhat border-none'>Club</Button>
                    </div>
                    <div>
                    <Space direction="vertical">
                   <Dropdown menu={{
               items,
                }}
            placement="bottom"
             arrow >
               <Button  className='text-[18px] font-redhat border-none'>Things to do</Button>
              </Dropdown> </Space> 
                    </div>

                    <hr className='bg-black mb-2' />
                    <div>
                    <Button  className='text-[18px] font-redhat border-none'>My Profile</Button>
                    </div>
                    <div>
                    <Button  className='text-[18px] font-redhat border-none'>Pay With Crypto</Button>
                    </div>
                    <div>
                    <Button  className='text-[18px] font-redhat border-none'>Cart</Button>
                    </div>
                    <div>
                    <Button  className='text-[18px] font-redhat border-none'>Contact Us</Button>
                    </div>
                    <div>
                    <Button  className='text-[18px] font-redhat border-none'>Log Out</Button>
                    </div>
                    <div>
                        <button className='font-semibold text-base bg-[#0E8BFF] hover:bg-[#1285f1] py-2.5 px-5 rounded-xl text-white border-none transition '>Get Started</button>
                    </div>
                </div>
        </div>
    </nav>
  )
}

export default Navbar
