import React, { useState } from 'react'
import { BugTwoTone, CloseOutlined, DownOutlined } from "@ant-design/icons"
import { Button } from "antd"
import PayModal from './PayModal'
function Payment() {

    const [showPaymentInfo, setShowPaymentInfo] = useState(false)

    const [cardItem, setCardItem] = useState([
        {
            id: 1,
            img: "image/Dasperson1.png",
            title: "The 90s with Dj Neptune",
            date: "Dec 12 2022",
            time: "9:00 PM ",
            location: "Quilox Club",
            price: 45000,
            quantity: 1
        },
        {
            id: 2,
            img: "image/Dasperson2.png",
            title: "Water Sports at Ikoyi Bay ",
            date: "Dec 12 2022",
            time: "9:00 PM ",
            location: "Quilox Club",
            price: 45000,
            quantity: 1
        },
    ])


    const updateQuantity = (id, increment) => {
        setCardItem((items) => (
            items.map((item) => (
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(item.quantity + increment, 1),
                        price: Math.max(item.quantity + increment, 1) *
                            (item.price / item.quantity)
                    }
                    : item
            ))
        ))
    }

    const removeItem = (id) => {
        setCardItem(cardItem.filter((item) => item.id !== id))
    }


    const AddNewItem = () => {
        const NewItem = {
            id: cardItem.length + 1,
            img: "image/Dasperson1.png",
            title: "The 90s with Dj Neptune",
            date: "Dec 12 2022",
            time: "12:00 PM ",
            location: "New Club",
            price: 500.00,
            quantity: "1"
        }
        setCardItem([...cardItem, NewItem])
    }


    return (
        <section className='flex flex-col lg:flex-row gap-6 border w-[80%] mx-auto mt-24'>
            {/* left section */}
            <div className='flex-1 p-6'>
                <h2 className='text-xl font-semibold text-[#969DAA]'>Your Cart</h2>
                {
                    cardItem.map((item) => (
                        <div key={item.id} className='flex items-center gap-4 mb-6 p-4 border-b-1'>
                            <img className='w-24 h-24 rounded-lg' src={item.img} alt="" />

                            <div className='flex-1'>
                                <h3 className='text-[22px] text-[#26395C] font-semibold'>{item.title}</h3>

                                <div className='mt-4'>

                                    <div className='flex gap-3 items-center'>
                                        <div className='flex items-start gap-2'>
                                            <img className='w-4 h-4' src="image/Calendar.png" alt="" />
                                            <p className='text-sm text-gray-600'>{item.date}</p>
                                        </div>
                                        <div className='flex items-start gap-2'>
                                            <img className='w-4 h-4' src="image/Mark.png" alt="" />
                                            <p className='text-sm text-gray-600'>{item.location}</p>
                                        </div>
                                    </div>

                                    <div className='flex items-start gap-2'>
                                        <img src="image/Clock.png" alt="" />
                                        <p className='text-sm text-gray-600'>{item.time}</p>
                                    </div>
                                </div>
                                {/* Quantity controls */}
                                <div className='flex items-center gap-4 mt-4 bg-gray-200 rounded-md  w-[20%] justify-center'>
                                    <button
                                        className='px-2 py-1 hover:bg-gray-300'
                                        onClick={() => updateQuantity(item.id, - 1)}>-</button>

                                    <span>{item.quantity}</span>

                                    <button
                                        className='px-2 py-1 hover:bg-gray-300'
                                        onClick={() => updateQuantity(item.id, + 1)}>+</button>
                                </div>
                                {/* Price section */}
                                <p className='mt-2 text-lg font-bold'>$ {item.price.toLocaleString()}</p>
                            </div>

                            {/* Remove item Button */}
                            <button onClick={() => removeItem(item.id)} >
                                <CloseOutlined />
                            </button>
                        </div>

                    ))
                }
                <Button onClick={AddNewItem} type='primary' size='large' >Add New Item</Button>
            </div>


            {/* right section */}
            <div className='flex-1 p-6 border'>
                {/* Account Info */}

                <div className='mb-6'>
                    <h3 className='text-[#26395C] text-[20px] font-semibold flex items-center gap-3'>
                        <img src="image/Check.png" alt="" />
                        Account information
                    </h3>
                    <div className='!ms-8'>
                        <h2 className='text-lg text-[#26395C]'>Tunde Chukwu</h2>
                        <p className='text-lg text-[#26395C]'>tundechukwu12@gmail.com</p>
                    </div>
                    <hr />
                </div>

                {/*  Phone number */}

                <div className='mb-6'>
                    <h3 className='text-[#26395C] text-[20px] font-semibold flex items-center gap-3'>
                        <img src="image/Check.png" alt="" />
                        Phone number
                    </h3>
                    <div className='!ms-8'>
                        <p className='text-lg text-[#26395C]'>+2341123465799</p>
                    </div>
                    <hr />
                </div>

                {/* Payment field with toggle */}
                <div>
                    <h3 className='text-[#26395C] text-[20px] font-semibold flex items-center gap-3 cursor-pointer ' onClick={() => setShowPaymentInfo(!showPaymentInfo)}>
                        <img src="image/Check.png" alt="" />
                        Payment<span className='font-normal '>card <DownOutlined /> </span>
                    </h3>
                    {
                        showPaymentInfo && (
                            <div className='grid grid-cols-2 gap-4 mt-5'>
                                <input type="number" placeholder='Card Number' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus: border-blue-500' />
                                <input type="text" placeholder='Card Holder Name' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus: border-blue-500' />
                                <input type="date" placeholder='MM/YY' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus: border-blue-500' />
                                <input type="text" placeholder='CVV' className='w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus: border-blue-500' />
                            </div>
                        )
                    }
                </div>

                <div className='bg-gray-100 p-5 rounded-lg mt-4'>
                    <ul className='mb-4'>
                        {
                            cardItem.map((item) => (
                                <li key={item.id} className='flex justify-between mb-3'>
                                    <span>
                                        {item.title} {item.quantity}
                                    </span>
                                    <span>${item.price.toLocaleString()}</span>
                                </li>
                            ))
                        }
                    </ul>
                  
                    {/* SubTotal calculation */}
                    <div className='flex justify-between border-t-2 border-blue-200 p-3'>
                        <span>SubTotal</span>
                        <span>$
                            {
                                cardItem.reduce((sum, item) => sum + item.price, 0)
                                    .toLocaleString()
                            }
                        </span>
                    </div>
                    {/* Tax Calculation */}
                    <div className='flex justify-between mt-2 px-3'>
                        <span>Tax (5%): </span>
                        <span>
                            $ {(
                                cardItem.reduce((sum, item)=> sum + item.price, 0) * 0.05
                            ).toLocaleString()
                            }
                        </span>
                    </div>
                    {/* total calculation */}
                  
                    <div className='flex justify-between font-bold my-2 border-t-2 p-3 border-blue-200'>
                        <span>Total Amount</span>
                        <span>$ {(
                            cardItem.reduce((sum,item)=> sum + item.price, 0) * 1.05
                        ).toLocaleString()
                        }</span>
                    </div>
                    <div>
                        <PayModal/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment
