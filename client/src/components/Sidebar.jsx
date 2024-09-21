import { useRef, useState } from 'react';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';
import Themes from './Themes';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (
    <Box display={{md: 'none', base: 'block'}}>
        <Button ref={btnRef} colorScheme='' onClick={onOpen}>
        <IoMdMenu fontSize={'2rem'} cursor={'pointer'} className='text-white'/>
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody pt={20}>
            <Flex justifyContent={'start'} flexDir={'column'} alignItems={'start'} gap={4} p={2} color={'black'} className=''>
                <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>Home</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>About Us</Link>
                {/* <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>Shop Pages</Link> */}
                <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>Clothing</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>Electricity</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>Jewellery</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>Shoes</Link>
                <Link to={'/'} className='hover:text-red-500 duration-150 text-xl'>Contact</Link>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
