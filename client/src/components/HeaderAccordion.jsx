import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Flex } from  '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';


export default function HeaderAccordion() {
    const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="hidden md:block">
        <Flex justifyContent={'space-between'} alignItems={'center'} bg={useColorModeValue('#000', 'gray.700')} px={5}>
            <Box color={useColorModeValue('white', '#fff')} className="shadow-md flex justify-start items-center gap-3 font-medium text-1x p-3">
                <div className="flex gap-3">
                    <Link to='/' className='font-medium'>Home</Link>
                    <Link to='/about' className='font-medium'>About Us</Link>
                </div>
                <div className="flex justify-center gap-4">
                    <div className="accordion">
                        <input type="checkbox" id="dropdown" placeholder='hello' className='cursor-pointer'/>
                        <label htmlFor="dropdown" className="cursor-pointer font-medium">Women's Wear</label>
                        <div className="content z-10 flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-y-scroll duration-200 bg-white">
                            <Link className="py-2 text-slate-50 bg-[#000] px-4 hover:bg-[#100f0f] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Shirt</Link>
                            <Link className="py-1 text-black  hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Gown</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Sheath Dress</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Skirt</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Cardigan</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Mini Dress</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Wedding Dress</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Hoodie</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Jeans</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Top</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Corset</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bubble Dress</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Coat</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bootcut</Link>
                        </div>
                    </div>
                    <div className="accordion">
                        <input type="checkbox" id="dropdown2" placeholder='hello' className='cursor-pointer'/>
                        <label htmlFor="dropdown2" className="cursor-pointer font-medium">Men's Wear</label>
                        <div className="content z-10 flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-y-scroll duration-200 bg-white">
                            <Link className="py-2 text-slate-50 bg-[#000] px-4 hover:bg-[#100f0f] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Shirt</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Polo Shirt</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Jeans</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Shorts</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Hoodie</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Cardigan</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Gloves</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Boots</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bathrobe</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Tie</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Baggy</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Singlet</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Long Sleeve Top</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Sandals</Link>
                        </div>
                    </div>
                    <div className="accordion">
                        <input type="checkbox" id="dropdown3" placeholder='hello' className='cursor-pointer'/>
                        <label htmlFor="dropdown3" className="cursor-pointer font-medium">Electronics</label>
                        <div className="content z-10 flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-y-scroll duration-200 bg-white">
                            <Link className="py-2 text-slate-50 bg-[#000] px-4 hover:bg-[#100f0f] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Air Conditioner</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Air Purifier</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Dish Washer</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Fan</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Kettle</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Iron</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Kitchen Scale</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Eelectric Stove</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Electric Pencil Sharper</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Electric Guitar</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Doorbell Camera</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Dishwasher</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Coffee Maker</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Ceiling fan</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Blender</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Washing Machine</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Alarm Clock</Link>
                            <Link className="py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bluetooth Speaker</Link>
                        </div>
                    </div>
                    <div className="accordion">
                        <input type="checkbox" id="dropdown4" placeholder='hello' className='cursor-pointer'/>
                        <label htmlFor="dropdown4" className="cursor-pointer font-medium">Laptops</label>
                        <div className="content z-10 flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-y-scroll duration-200 bg-white">
                            <Link className='py-2 text-slate-50 bg-[#000] px-4 hover:bg-[#100f0f] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Hp</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Msi</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Dell</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Acer</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Asus</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Acer</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Apple</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Lenovo</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Microsoft</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>MacBook Air</Link>
                        </div>
                    </div>
                    <div className="accordion">
                        <input type="checkbox" id="dropdown5" placeholder='hello' className='cursor-pointer'/>
                        <label htmlFor="dropdown5" className="cursor-pointer font-medium">Phones</label>
                        <div className="content z-10 flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-y-scroll duration-200 bg-white">
                            <Link className='py-2 text-slate-50 bg-[#000] px-4 hover:bg-[#100f0f] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Apple</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Samsung</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Xiaomi</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Huawei</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Nokia</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Oppo</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Vivo</Link>
                            <Link className='py-1 text-black hover:bg-[#000] hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Techno</Link>
                            <Link className='py-1 text-black hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Itel</Link>
                            <Link className='py-1 text-black hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Infinix</Link>
                            <Link className='py-1 text-black hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Alcatel</Link>
                            <Link className='py-1 text-black hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Microsoft</Link>
                            <Link className='py-1 text-black hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>ZTE</Link>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Link className='font-medium'>Contact Us</Link>
                </div>
            </Box>
            <Box height={'30px'} width={'30px'}>
                <img src={currentUser.avatar} className='object-fit rounded-full' alt="" />
            </Box>
        </Flex>
    </div>
  )
}
