import React from 'react'

function HeroArea() {
    return (
        <section className="bg-[url('image/Hero.png')] bg-cover bg-no-repeat overflow-hidden mx-auto w-full h-[636px]" >
            <div className='container mx-auto mt-10 p-4'>
                <h1 className='text-center md:text-left text-[24px] md:text-[45px] lg:text-[62px] text-white font-bold font-redhat  lg:leading-[74.4px] max-w-[694px]'>Find amazing things to do anytime, anywhere in Lagos.</h1>
                <div className='flex flex-col  md:flex-row justify-between gap-5  md:gap-3 p-6 bg-white max-w-[726px] rounded-lg items-center md:items-end'>
                    <div>
                        <h1 className='text-[12px] text-[#26395C] font-redhat'>Location</h1>
                        <div>
                            <select className='py-1 px-3 w-[268px] sm:w-[174px] border border-gray-300 rounded-lg text-gray-600'>
                                <option value="Oshodi">Oshodi</option>
                                <option value="Location">Location</option>
                                <option value="Location">Location</option>
                                <option value="Location">Location</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[12px] text-[#26395C] font-redhat'>Date</h1>
                        <div>
                            <select className='py-1 px-3 w-[268px] sm:w-[174px] border border-gray-300 rounded-lg text-gray-600'>
                                <option value="Date">Date</option>
                                <option value="Date">Date</option>
                                <option value="Date">Date</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[12px] text-[#26395C] font-redhat'>Activities</h1>
                        <div>
                            <select className='py-1 px-3 w-[268px] sm:w-[174px] border border-gray-300 rounded-lg text-gray-600'>
                                <option value="Night Clubs">Night Clubs</option>
                                <option value="Night Clubs">Night Clubs</option>
                                <option value="Night Clubs">Night Clubs</option>
                                <option value="Night Clubs">Night Clubs</option>
                            </select>
                        </div>
                    </div>
                    <button className='bg-[#0E8BFF] py-[9px] px-[28px] text-white rounded-[8px]  w-[268px] sm:w-[174px]'>
                        Search
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroArea
