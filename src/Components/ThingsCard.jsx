import React from 'react'

function ThingsCard() {

    const cards =[
        {
            imgSrc:"image/Sight.png",
            title:"Sight Seeing",
        },
        {
            imgSrc:"image/Volley.png",
            title:"Volley Ball Game",
        },
        {
            imgSrc:"image/Wizkid.png",
            title:"Wizkid Show",
        },
        {
            imgSrc:"image/Wizkid.png",
            title:"Wizkid Show",
        },
        {
            imgSrc:"image/Sight.png",
            title:"Sight Seeing",
        },
        {
            imgSrc:"image/Volley.png",
            title:"Volley Ball Game",
        },
        {
            imgSrc:"image/Wizkid.png",
            title:"Wizkid Show",
        },
        {
            imgSrc:"image/Wizkid.png",
            title:"Wizkid Show",
        },
    ]

  return (
    <section className='bg-[#9A9FBF1A]' >
        <div className='container mx-auto pt-[50px]'>
            <h1 className='text-[#26395C] text-center lg:text-start text-[32px] font-bold font-redhat'>Top things to do in Lagos</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto '>
                {
                    cards.map((card,index)=> (
                        <div key={index} className=''>
                            <img className='w-full' src={card.imgSrc} alt="" />
                            <div>
                                <h2 className='text-[#26395C] text-[22px] font-bold text-center'>{card.title}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ThingsCard
