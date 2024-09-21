import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LatestProducts() {
  return (
    <Box py={10} maxW={{md: '90%', base: '100%'}} mx={'auto'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} px={5}>
            <Heading fontWeight={500} fontSize={26} color={'red.500'}>Latest Products</Heading>
            <Link to={'/'} className='font-medium'>View All</Link>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={3} mt={10}>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
            <Box height={'200px'} width={'185px'} p={2} shadow={'md'}>

            </Box>
        </Flex>
    </Box>
  )
}
