import React from 'react'
import { Button } from 'antd'
function FindPlace() {
    return (
        <section>
            <div className='flex flex-col  lg:flex-row justify-between gap-5  md:gap-3 p-6 bg-white lg:max-w-[1050px]  rounded-lg items-center lg:items-end mx-auto'>
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
                    <h1 className='text-[12px] text-[#26395C] font-redhat'>Time</h1>
                    <div>
                        <select className='py-1 px-3 w-[268px] sm:w-[174px] border border-gray-300 rounded-lg text-gray-600'>
                            <option value="Night Clubs">Night Clubs</option>
                            <option value="Night Clubs">Night Clubs</option>
                            <option value="Night Clubs">Night Clubs</option>
                            <option value="Night Clubs">Night Clubs</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h1 className='text-[12px] text-[#26395C] font-redhat'>Cuisine</h1>
                    <div>
                        <select className='py-1 px-3 w-[268px] sm:w-[174px] border border-gray-300 rounded-lg text-gray-600'>
                            <option value="Night Clubs">Chinese</option>
                            <option value="Night Clubs">Chinese</option>
                            <option value="Night Clubs">Chinese</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h1 className='text-[12px] text-[#26395C] font-redhat'>People</h1>
                    <div>
                        <select className='py-1 px-3 w-[268px] sm:w-[174px] border border-gray-300 rounded-lg text-gray-600'>
                            <option value="Night Clubs">1</option>
                            <option value="Night Clubs">2</option>
                            <option value="Night Clubs">3</option>
                            <option value="Night Clubs">4</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Button size='large' type='primary'>Search</Button>
                </div>
            </div>
        </section>
    )
}

export default FindPlace
