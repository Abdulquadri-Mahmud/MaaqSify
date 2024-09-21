import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react'
import MobileSubCategories from './sub_categories/MobileSubCategories'

export default function MobileCategories() {
  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem border={'0'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={500}>Clothing</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <MobileSubCategories/>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'0'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={500}>Electricity</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
