import React, { useState, useEffect } from 'react'
import { Button } from 'antd';
function RestaurantsCard({ title }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        setData(jsonData)
      })
  }, [])



  return (
    <section className='bg-[#9A9FBF1A] p-10'>
      <div className='w-[80%] mx-auto'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-2xl md:text-4xl mb-4 mt-4 text-[#26395C]'>{title}</h1>
          <Button type='link' className='text-xl'>See More</Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
          {
            data.map((myData) => (
              <div key={myData.id}>
                <img className='max-w-[400px] object-cover rounded-lg mb-3' src={myData.image} alt="" />
                <h2 className='font-semibold text-lg mb-2 text-[#26395C] ' >{myData.title}</h2>
                <p className=' text-[#26395C]text-sm text-[#26395C] mb-1 font-medium'>{myData.desc}</p>
                <p className='text-sm text-[#26395C]'>{myData.tags}</p>
                <Button size='large' type='primary'>Reserve Now</Button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default RestaurantsCard
