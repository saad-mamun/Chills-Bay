import React from 'react'

function Gallary() {

    const Gallery = [
        {
            img:"image/G1.png"
        },
        {
            img:"image/G2.png"
        },
        {
            img:"image/G3.png"
        },
        {
            img:"image/G4.png"
        },
        {
            img:"image/G5.png"
        },
        {
            img:"image/G6.png"
        },

    ];

  return (
    <section className='border p-10 mb-10 '>
      <div className='container mx-auto'>
        <h3 className='text-[#26395C] text-3xl font-semibold text-center lg:text-start'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span></h3>
        <div className='grid md:grid-cols-3 lg:grid-cols-6 mt-6'>
             {
                Gallery.map((source,i) =>(
                    <div className='mt-4' key={i}>
                        <img className='w-full object-cover h-full' src={source.img} alt="" />
                    </div>
                ))
             }
        </div>
      </div>
    </section>
  )
}

export default Gallary

