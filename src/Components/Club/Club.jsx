import React from 'react'
import { Button, Carousel } from 'antd';
import NightClubs from './NightClubs';
import ClubCarousel from './ClubCarousel';

const Club = () => {

  const Quilox = [
    {
      title: "Club Quilo",
      desc: "Amaarae & Tems on June 3rd",
      btn: "Book A Section Now"
    }
  ]

  const contentStyle = {

    color: '#fff',
    backgroundImage: "url('image/ClubImage.png')",
    height: "555px",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };



  return (
    <section className='bg-black text-white'>
      <div>
        <Carousel afterChange={onChange}>
          <div>
            <div
              style={contentStyle}>
              <div className='pt-5 '>
                {
                  Quilox.map((item, index) => (
                    <div key={index} className='lg:p-24 p-12 max-w-[558px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start ' >
                      <h1 className=' text-[30px] lg:text-[42px] font-bold' >{item.title}</h1>
                      <p className='text-[22px]  font-semibold'>{item.desc}</p>
                      <div className='items-end'>
                        <Button type='primary'>{item.btn}</Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div>
            <h3
              style={contentStyle}>
              <div className='pt-5 '>
                {
                  Quilox.map((item, index) => (
                    <div key={index} className='lg:p-24 p-12 max-w-[558px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start ' >
                      <h1 className=' text-[30px] lg:text-[42px] font-bold' >{item.title}</h1>
                      <p className='text-[22px]  font-semibold'>{item.desc}</p>
                      <div className='items-end'>
                        <Button type='primary'>{item.btn}</Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </h3>
          </div>
          <div>
            <h3
              style={contentStyle}>
              <div className='pt-5 '>
                {
                  Quilox.map((item, index) => (
                    <div key={index} className='lg:p-24 p-12 max-w-[558px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start ' >
                      <h1 className=' text-[30px] lg:text-[42px] font-bold' >{item.title}</h1>
                      <p className='text-[22px]  font-semibold'>{item.desc}</p>
                      <div className='items-end'>
                        <Button type='primary'>{item.btn}</Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </h3>
          </div>
          <div>
            <h3
              style={contentStyle}>
              <div className='pt-5 '>
                {
                  Quilox.map((item, index) => (
                    <div key={index} className='lg:p-24 p-12 max-w-[558px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start ' >
                      <h1 className=' text-[30px] lg:text-[42px] font-bold' >{item.title}</h1>
                      <p className='text-[22px]  font-semibold'>{item.desc}</p>
                      <div className='items-end'>
                        <Button type='primary'>{item.btn}</Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
      {/* Clubs section */}
      <div>
        <NightClubs Htitle="Popular Night Clubs" />
      </div>
      {/* Carousel */}
      <div>
        <ClubCarousel/>
      </div>
      {/* Bar */}
      <div>
        <NightClubs Htitle="Bars and Night clubs near you" />
      </div>
    </section>
  )
}

export default Club
