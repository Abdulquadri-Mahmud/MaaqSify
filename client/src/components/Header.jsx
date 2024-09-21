import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';
import { FaCartPlus } from "react-icons/fa";
import {Heading, Icon } from '@chakra-ui/react';
import { IoSettingsOutline } from "react-icons/io5";
import { MdSearch } from "react-icons/md";

import { Box, Flex, Text, Input, Button  } from '@chakra-ui/react';

import { useColorModeValue } from '@chakra-ui/react';
import { IoBagOutline } from "react-icons/io5";

import Sidebar from "./Sidebar";
import Themes from './Themes';
import HeaderAccordion from './HeaderAccordion';
import Settings from './settings/Settings';

export default function Header() {

    return (
      <Box bgGradient='linear(to-l, gray.800, pink.800)' top={0} position={'sticky'} zIndex={100} roundedBottomEnd={{md: '0px', base: '0px'}} roundedBottomStart={{md: '0px', base: '0px'}}>
        <div className=''>
            <Box display={{md: 'block', base: ''}}>
                <Box bg={useColorModeValue('', 'gray.700')} color={'white'} className="header font-medium text-sm py-1 px-4 flex md:justify-around justify-between items-center">
                    <div className="">
                        <Link to='tel:+2347047594667' className='text-sm font-medium'>Welcome to MaaqSify</Link>
                    </div>
                    <div className="">
                        <div className=" flex gap-x-2 text-red-500">
                            <Link to='#'><FaFacebookF className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                            <Link to='#'><FaInstagram className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                            <Link to='#'><FaTwitter className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                            <Link to='#'><IoLogoYoutube className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                        </div>
                    </div>
                </Box>
            </Box>
            <div className=" py-4 px-4 flex flex-wrap justify-between items-center">
                <div className="logo">
                    <Link to={'/'}>
                        <Heading fontWeight={600} fontSize={{md:30, base: 25}} fontFamily={'monospace'} className=' text-white uppercase'>MaaqSify</Heading>
                    </Link>
                </div>
                <div className="w-[30%] rounded hidden md:block">
                    <form className='w-[100%] relative'>
                        <div className="">
                            <input type="text" placeholder='Search for products'  className=' text-black font-semibold rounded-sm border-none outline-none p-2 w-[100%]'/>
                            <Box bg={'pink.500'} className="absolute top-0 right-0 flex justify-center items-center w-[45px] h-full rounded-r-sm cursor-pointer ">
                                <Icon as={MdSearch} color={useColorModeValue('white', 'black')} fontSize={23}/>
                            </Box>
                        </div>
                    </form>
                </div>
                <div  className="relative rounded font-medium ">
                    <Flex alignItems={'center'}>
                        <Flex alignItems={'center'}>
                            <Text boxSize={'25px'} bg={useColorModeValue('white', '#fff')} color={useColorModeValue('red.500', 'black')} borderRadius={50} position={'absolute'} top={-1} left={-5} fontSize={16} className='flex items-center justify-center'>0</Text>
                            <Box mr={3}>
                                <Icon as={IoBagOutline} color={useColorModeValue('white', 'white')}/>
                            </Box>
                            <Box display={{base: 'none', md: 'block'}}>
                                {/* <Themes/> */}
                            </Box>
                            <Box>
                                <Settings/>
                            </Box>
                        </Flex>
                        <Sidebar/>
                    </Flex>
                </div>
            </div>
            {/* <HeaderAccordion/> */}
        </div>
        <Box display={{md: 'block', base: 'none'}} width={'80%'} mx={'auto'} bg={'white'} py={1} roundedTopStart={'30px'} shadow={'sm'} roundedTopEnd={'30px'}>
            <Flex justifyContent={'center'} alignItems={'center'} gap={5} p={2} color={'gray.900'} className='nav'>
                {/* <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Home</Link> */}
                <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Computer & Accessories</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Phone & Tablets</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Electronics</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Women's Fashion</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Men's Fashion</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Appliances</Link>
                {/* <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Jewellery</Link> */}
                <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Baby Products</Link>
                {/* <Link to={'/'} className='hover:text-red-500 duration-150 font-normal'>Health & Beauty</Link> */}
            </Flex>
        </Box>
      </Box>
    )
}


{/* */}