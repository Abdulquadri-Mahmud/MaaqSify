import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';
import Themes from './Themes';
// import SidebarAccordion from './SidebarAccordion';

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const showSideBar = () => setOpen(true);
    const closeSideBar = () => setOpen(false);
  return (
    <Box display={{md: 'none', base: 'block'}}>
        <Flex position={'sticky'} top={10} zIndex={100} w={'full'} justifyContent={'space-between'} alignItems={'center'} py={0} px={{base: 0, md: 10}}>
            <Box>
                <Flex gap={3} alignItems={'center'} mr={2}>
                    <Themes/>
                    <IoMdMenu fontSize={'2rem'} cursor={'pointer'} onClick={showSideBar} className='text-white'/>
                </Flex>
                <Box>
                    <Box className={`${open ? 'w-72 duration-200' : 'w-0 duration-200'}`} position={'fixed'} top={'5.7vh'} right={0} overflow={'hidden'} bg={'white'} height={'full'}>
                        <Flex justifyContent={'center'} alignItems={'center'} boxSize={10} border={'2px'} borderColor={'gray.700'} borderRadius={5} cursor={'pointer'} position={'absolute'} top={8} left={3}>
                            <IoClose className='cursor-pointer font-semibold text-3xl text-gray-700' onClick={closeSideBar}/>
                        </Flex>
                        <Flex flexDirection={'column'} mt={24} gap={5} padding={5}>
                            <Link className='font-medium text-black' to='/'>Home</Link>
                            <Flex flexDirection={'column'}>
                                {/* <SidebarAccordion/> */}
                            </Flex>
                            <Link className='font-medium text-black' to='/ourhouses'>Our Houses</Link>
                            <Link className='font-medium text-black' to='/estate-design'>Estate Design</Link>
                            <Link to='/testimonial' className='font-medium text-black'>Testimonials</Link>
                            <Link className='font-medium text-black' to='/contact'>Contact Us</Link>
                            <Box color={'black'}>
                                <Text fontWeight={500} fontSize={16}>Al-Ameen IT Hub</Text>
                                <Text fontWeight={500} fontSize={16} pt={4}>Upcoming Event (A'level School)</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}
