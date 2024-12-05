import React from 'react'



function ChillsBay() {

    const cards = [
        {
            imgSrc: "image/Group.png",
            title: " Your  entire  trip in one checkout!",
            desc: "Add multiple experiences to your cart and checkout on one click."
        },
        {
            imgSrc: "image/Wallet.png",
            title: "Pay with Crypto on the go",
            desc: "Enjoy the freedom of universal payments for a seamless marketplace experience"
        },
        {
            imgSrc: "image/ticketstransfer.png",
            title: "Free Cancellation and ticket transfer",
            desc: "Resell your tickets or cancel your reservations at zero cost 24 hours before."
        },
    ]



    return (
        <section>
            <div className='mt-10'>
                <h1 className='text-[#26395C] text-2xl md:text-[30px] lg:text-[42px] font-bold text-center mb-6'>Why Use Chillsbay?</h1>
                <div className='bg-[#189EFF0F]'>
                    <div className='w-[60%] container mx-auto flex flex-col lg:flex-row items-center justify-between lg:pt-7 lg:pb-5'>
                        {
                            cards.map((card, index) => (
                                <div key={index} className='flex flex-col  items-center text-center max-w-[318px] mt-10'>
                                    <img className='w-[128px]' src={card.imgSrc} alt="" />
                                    <h1 className='text-[24px] lg:text-[32px] font-semibold mt-2 mb-2' >{card.title}</h1>
                                    <p className='text-[20px] md:text-[24px]'>{card.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChillsBay
