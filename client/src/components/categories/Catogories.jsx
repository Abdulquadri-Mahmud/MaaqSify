import React from 'react'
import Category from './Category'
import Products from './Products'
import { Box, Flex } from '@chakra-ui/react'

export default function Catogories() {
  return (
    <Flex flexWrap={'wrap'} gap={2} maxW={{'2xl': '80%', md: '95%', base: '100%'}} mx={'auto'} my={'5vh'}>
        <Box width={{md: '300px', base: '100%'}} bg={'red.500'} color={'white'} padding={10}>
            <Category/>
        </Box>
        <Box flex={'1'}>
            <Products/>
        </Box>
    </Flex>
  )
}
