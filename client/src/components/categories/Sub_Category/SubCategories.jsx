import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function SubCategories() {
  return (
    <Box height={'400px'}>
        <Accordion allowToggle>
            <AccordionItem border={'none'} borderColor={'gray.600'}>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <Text fontSize={14} fontWeight={13}>Women's Wears</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Flex flexDir={'column'} gap={2}>
                    <Link to={'/'} className='text-sm'>Jeans</Link>
                    <Link to={'/'} className='text-sm'></Link>
                    <Link to={'/'} className='text-sm'></Link>
                </Flex>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={'none'} borderColor={'gray.600'}>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <Text fontSize={14} fontWeight={13}>Men's Wears</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex flexDir={'column'} gap={2}>
                        <Link to={'/'} className='text-sm'>Jeans</Link>
                        <Link to={'/'} className='text-sm'>T</Link>
                        <Link to={'/'} className='text-sm'></Link>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Box>
  )
}
