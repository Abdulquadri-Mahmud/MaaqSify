import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';
import { FaCartPlus } from "react-icons/fa";
import {Icon } from '@chakra-ui/react';
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
      <Box bg={useColorModeValue('gray.800')} top={0} position={'sticky'} roundedBottomEnd={{md: '50px', base: '30px'}} roundedBottomStart={{md: '50px', base: '30px'}}>
        <div className=''>
            <Box display={{md: 'block', base: ''}}>
                <Box bg={useColorModeValue('white', 'gray.700')} color={'black'} className="header font-medium text-sm py-1 px-4 flex md:justify-around justify-between items-center">
                    <div className="">
                        <Link to='tel:+2347047594667' className='text-sm font-medium'>Welcome to adey-Shopify</Link>
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
                        <h1 className='md:text-4xl text-2xl font-medium text-white'>Ade<span className='text-red-500'>-Shopify</span></h1>
                    </Link>
                </div>
                <div className="w-[30%] rounded hidden md:block">
                    <form className='w-[100%] relative'>
                        <div className="">
                            <Input type="text" placeholder='Search For Products' bg={'white'}  color={useColorModeValue('black', 'white')} className='font-semibold rounded border-none outline-none p-2 w-[100%]'/>
                            <Box bg={useColorModeValue('red.500', 'gray.700')} borderWidth={2} borderColor={'red.500'} className="absolute top-0 right-0 flex justify-center items-center w-[45px] h-full rounded-r-md cursor-pointer ">
                                <Icon as={MdSearch} color={useColorModeValue('white', 'black')} fontSize={20}/>
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
                                <Themes/>
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
        <Box display={{md: 'block', base: 'none'}} paddingBottom={3}>
            <Flex justifyContent={'center'} alignItems={'center'} gap={4} shadow={'md'} bg={useColorModeValue('')} p={2} color={'white'}>
                <Link to={'/'} className='text-xl'>Home</Link>
                <Link to={'/'} className='text-xl'>About Us</Link>
                <Link to={'/'} className='text-xl'>Shop Pages</Link>
                <Link to={'/'} className='text-xl'>Clothing</Link>
                <Link to={'/'} className='text-xl'>Electricity</Link>
                <Link to={'/'} className='text-xl'>Jewellery</Link>
                <Link to={'/'} className='text-xl'>Shoes</Link>
                <Link to={'/'} className='text-xl'>Contact</Link>
            </Flex>
        </Box>
      </Box>
    )
}


{/* */}