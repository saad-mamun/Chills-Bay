import { Button } from 'antd'
import React from 'react'

function NightClubs({ Htitle }) {

    const Clubs = [
        {
            img: "image/quilox.png",
            title: "Quilox ",
            desc: "2 Musa Yar’Adua, Lagos Nigeria",
            date: "Mondays-Friday",
            time: "8pm-3am",
            bttn: "Book  Now"
        },
        {
            img: "image/silverQ.png",
            title: "Silver fox",
            desc: "2 Musa Yar’Adua, Lagos Nigeria",
            date: "Mondays-Friday",
            time: "8pm-3am",
            bttn: "Book  Now"
        },
        {
            img: "image/Nitro.png",
            title: "Nitro night club",
            desc: "2 Musa Yar’Adua, Lagos Nigeria",
            date: "Mondays-Friday",
            time: "8pm-3am",
            bttn: "Book  Now"
        },
        {
            img: "image/ClubVegas.png",
            title: "Club vegas",
            desc: "2 Musa Yar’Adua, Lagos Nigeria",
            date: "Mondays-Friday",
            time: "8pm-3am",
            bttn: "Book  Now"
        },
    ]


    return (
        <div className='bg-black text-white w-[80%] mx-auto mt-8 lg:mt-18 pb-10'>
            <div>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className=' text-[18px] lg:text-[32px] font-semibold'>{Htitle}</h1>
                    <button className=' text-base lg:text-[24px]'>See More</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10'>
                {
                    Clubs.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt="Night club" />
                            <h1 className='text-[24px] font-semibold mt-2 mb-3'>{item.title}</h1>
                            <p>{item.desc}</p>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-start gap-2'>
                                    <img src="image/WCalendar.png" alt="Date" />
                                    <p>{item.date}</p>
                                </div>
                                <div className='flex items-start gap-2' >
                                    <img src="image/WClock.png" alt="Clock" />
                                    <p>{item.time}</p>
                                </div>
                            </div>
                            <div>
                                <Button type='primary' className='w-[180px]'>{item.bttn}</Button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default NightClubs
