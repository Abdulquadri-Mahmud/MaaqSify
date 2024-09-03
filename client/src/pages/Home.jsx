import React from 'react'
import { useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';
import Hero from '../components/Hero';
import Catogories from '../components/categories/Catogories';

export default function Home() {

  
  return (
    <div>
      <Hero/>
      <Catogories/>
    </div>
  )
}
