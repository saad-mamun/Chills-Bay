import React from 'react'
import { Button } from 'antd'

function DrinkHero() {
    return (
        <section className='bg-[url("image/HeroEat.png")] w-full h-[70vh] bg-no-repeat bg-top md:bg-cover overflow-hidden mx-auto'>
            <div className='flex flex-col justify-start items-center lg:items-start lg:py-[100px] p-4 pt-6 w-[80%] mx-auto'>
                <div className='bg-[#FBFCFF] container w-full max-w-[330px] md:max-w-[600px] rounded-lg p-[18px] md:py-[30px] md:px-8'>
                    <h1 className='text-[#26395C] text-2xl lg:text-[42px] font-bold pb-3.5 lg:pb-6'>Our top pick for the week!</h1>
                    <h4 className='text-[#26395C] text-lg lg:text-xl font-semibold'>Nok by Alara</h4>
                    <p className='text-lg text-[#26395C]' >Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor .</p>
                    <div className='flex justify-end items-center'>
                        <Button type='primary' >Reserve Now</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DrinkHero
