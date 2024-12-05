import React from 'react'

const footerData = {
    socialIcons: [
        "image/Facebook.png",
        "image/Instagram.png",
        "image/Youtube.png",
        "image/Twitter.png",
        "image/Tiktok.png",
        "image/Linkedin.png",
    ],

    sections: [
        {
            title: "Menu",
            menus: [
                { items: ["Home", "Eat", "Drink", "Events", "Club"], },
                { items: ["Blog", "Careers", "Contact", "FAQs"], },
            ]
        },
        {
            title: "Utility Pages",
            menus: [
                { items: ["Start Here", "Pay with Crypto", "Style Guide", "Password Protected", "404 Not Found", "Licenses", "Changelog"], },
            ]
        },
    ],

    partnersSection: {
        image: "image/Partner.png",
        title: "Become a Partner",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere."
    },

    logo: "image/MLogo.png",
    copyright: `© ${new Date().getFullYear()} All rights reserved.`
}


const MenuSection = ({ title, menus }) => {
    return (
        <div>
            <p className='font-semibold text-2xl border-b mb-5 py-3' >{title}</p>
            <div className='flex gap-24 text-base text-[#656B89]'>
                {menus.map((menu, index) => (
                    <ul key={index} >
                        {
                            menu.items.map((item, idx) => (
                                <li className='mb-2 ' key={idx} >{item}</li>
                            ))
                        }
                    </ul>
                ))}
            </div>
        </div>
    )
}



function Footer() {

    const { socialIcons, sections, partnersSection, logo, copyright } = footerData;


    return (
        <footer className='p-10'>
            {/* Parent div */}
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2'>
                {/* left div */}
                <div className='col-span-1'>
                    <img className='w-fit' src={logo} alt="" />
                    <p className='text-sm mb-4'>{copyright}</p>
                    <div className='flex space-x-4'>
                        {
                            socialIcons.map((icon, ind) => (
                                <a href='' key={ind}>
                                    <img className='w-4 h-4' src={icon} alt="" />
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* right div */}
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 col-span-3'>
                    {sections.map((section, index) => (
                        <MenuSection
                            key={index}
                            title={section.title}
                            menus={section.menus} />

                    ))}

                    <div className='bg-[#F5FAFF] p-8 rounded-[6px]'>
                        <img className='pb-2' src={partnersSection.image} alt="" />
                        <h3 className='text-[#26395C] font-semibold text-[22px]'>{partnersSection.title}</h3>
                        <p className='text-[#656B89] text-base max-w-[239px]'>{partnersSection.desc}</p>
                        <button className='text-white bg-[#0E8BFF] hover:bg-[#0785fb] max-w-[288px] py-3 px-14 rounded-[6px]'>
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
