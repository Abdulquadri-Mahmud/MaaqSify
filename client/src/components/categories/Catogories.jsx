import React from 'react'
import Category from './Category'
import Products from './Products'
import { Box, Flex, Heading } from '@chakra-ui/react'

export default function Catogories() {
  return (
    <Flex flexWrap={'wrap'} gap={2} maxW={{'2xl': '80%', md: '95%', base: '100%'}} mx={'auto'} my={'5vh'} >
        <Box width={{md: '300px', base: '100%'}} bgGradient='linear(to-l, gray.700, gray.800)' color={'white'} mx={{md: 0, base: 2}} rounded={'md'} py={6} px={3}>
            <Heading fontSize={{md:25, base: 20}} fontWeight={500} pb={{md: 7, base:0}} textAlign={{md: 'start', base: 'center'}}>Categories</Heading>
            <Box display={{md: 'block', base: 'none'}}>
              <Category/>
            </Box>
        </Box>
        <Box flex={'1'} position={'relative'} mx={{md: 0, base: 2}}>
            <Products/>
        </Box>
    </Flex>
  )
}
