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
import SubCategories from './Sub_Category/SubCategories'

export default function Category() {
  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Fashion</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            {/* <SubCategories/> */}gg
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Appliances</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            {/* <SubCategories/> */}ddd
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Electronics</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Phones & Tablets</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Health & Beauty</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Home & Office</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Electronics</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Computing</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Baby Products</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={'none'} borderColor={'gray.600'}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text fontWeight={400} fontSize={14}>Gaming</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel ml={15} fontWeight={400} fontSize={14}>
            Lorem ipsum dolor sit amet, 
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </Box>
  )
}
