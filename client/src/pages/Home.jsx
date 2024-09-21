import React from 'react'
import { useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';
import Hero from '../components/Hero';
import Catogories from '../components/categories/Catogories';
import LatestProducts from '../components/Latest_Products/Latest_products';

export default function Home() {

  
  return (
    <div className='bg-slate-200'>
      <Hero/>
      {/* <LatestProducts/> */}
      <Catogories/>
    </div>
  )
}
