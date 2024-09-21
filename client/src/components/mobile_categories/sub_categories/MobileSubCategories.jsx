import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function MobileSubCategories() {
  return (
    <Box>
        <Accordion allowToggle>
            <AccordionItem border={'0'}>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <Text>Women's Wears</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} ml={4}>
                <Flex flexDir={'column'} gap={2}>
                    <Link to={'/'}>Jeans</Link>
                    <Link to={'/'}>Chinos</Link>
                    <Link to={'/'}></Link>
                </Flex>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={'0'}>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <Text>Men's Wears</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} ml={4}>
                    <Flex flexDir={'column'} gap={2}>
                        <Link to={'/'}>Jeans</Link>
                        <Link to={'/'}>T</Link>
                        <Link to={'/'}></Link>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Box>
  )
}
