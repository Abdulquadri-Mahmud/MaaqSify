import React, { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
  Box,
  useDisclosure,
  Button,
  Heading,
} from '@chakra-ui/react'
import MobileCategories from '../mobile_categories/MobileCategories';
import All_Listings from '../products_list/All_Listings';

export default function Products() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  return (
    <Box>
      <Flex justifyContent={{md: 'end', base: 'space-between'}}>
        <Box display={{md: 'none', base: 'block'}}>
          <Button  bgGradient='linear(to-l, gray.800, pink.800)' _hover={{bgGradient:'linear(to-r, gray.700, gray.800)'}} color={'white'} onClick={onOpen}>Open</Button>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px'>Categories</DrawerHeader>
              <DrawerBody>
                <MobileCategories/>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Box>
          <Heading fontWeight={500} fontSize={25}>Products</Heading>
        </Box>
      </Flex>
      <Box mt={0}>
        <All_Listings/>
      </Box>
    </Box>
  )
}
