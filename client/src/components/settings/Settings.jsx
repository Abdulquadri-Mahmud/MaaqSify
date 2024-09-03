import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { RiUserSettingsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div>
        <Menu className="">
            <MenuButton display={{base: 'none', md: 'block'}} bg={'transparent'} height={'30px'} color={'white'}
            _hover={{bg: 'transparent'}} as={Button} _focus={{bg: 'white'}}>
                <RiUserSettingsLine className='text-xl'/>
            </MenuButton>
            <MenuList p={3} bg={useColorModeValue('white')}>
                <MenuItem _hover={{bg: useColorModeValue('red.500', 'gray.800'),}} bg={useColorModeValue('black', 'gray.600')} color={'white'} rounded={5} padding={2.5} mb={3} transitionDuration={200} className='hover:-translate-y-1'>
                    <Link to='/' className="">My Account</Link>
                </MenuItem>
                <MenuItem _hover={{bg: useColorModeValue('red.500', 'gray.800'),}} bg={useColorModeValue('black', 'gray.600')} color={'white'} rounded={5} padding={2.5} mb={3} transitionDuration={200} className='hover:-translate-y-1'>
                    <Link to='/' className="">Checkout</Link>
                </MenuItem>
                <MenuItem _hover={{bg: useColorModeValue('red.500', 'gray.800'),}} bg={useColorModeValue('black', 'gray.600')} color={'white'} rounded={5} padding={2.5} mb={3} transitionDuration={200} className='hover:-translate-y-1'>
                    <Link to='/signin' className=''>Sign In</Link> 
                </MenuItem>
            </MenuList>
        </Menu>
    </div>
  )
}
