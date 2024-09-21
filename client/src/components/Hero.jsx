import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// images
import laptop from '../assets/surface-laptop-studio.png';
import img2 from '/samsung-phones.png';
import img3 from '/watch.png';
import img4 from '/t-shirt.png';
import mobile from '/Apple-Iphone.png';
import moyoduduza from '../assets/Print-Shirt1.png';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <Box bgGradient='linear(to-l, red.500, gray.800)'
      className={className}
      style={{ ...style, display: "none",
        paddingTop: '5.5px', paddingLeft: '5.5px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box bgGradient='linear(to-l, red.500, gray.800)'
      className={className}
      style={{ ...style, display: "none", 
        paddingTop: '5.5px', paddingLeft: '5.5px',
      }}
      onClick={onClick}
    />
  );
}

export default function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      
  return (
    <section >
      <Flex justifyContent={'center'} alignItems={'center'} className='flex-wrap' p={{md:0, base: 0}} className='h-[60vh]'>
        <Flex justifyContent={'center'} alignItems={'center'} width={{md: '47%', base: '100%'}} bg={{md: 'gra', base: ''}} height={{md: '300px', base:'100%'}} pb={10} pt={20}>
          <Box>
            <Heading color={useColorModeValue({md: 'gray.800', base: 'black'})} fontWeight={500} className='pt-3 md:text-6xl text-4xl font-semibold md:text-start text-center'><span className="md:text-7xl text-6xl">Get <span className="">Start</span></span> <br/> <span className="text-4xl">Your <span className="text-red-500">Favorite</span> Shop<span className="text-red-">ping</span></span></Heading>
            <Text color={useColorModeValue({md: 'gray.800', base: 'black'})} fontWeight={500} fontSize={{md: '1rem', base:'16'}} className='pt-3 text-xl font-semibold md:text-start text-center'>Save more with coupons & up to 70% off!</Text>
            <div className="flex md:justify-start justify-center mt-5">
              <Button color={useColorModeValue('white', 'white')} bgGradient='linear(to-l, red.500, gray.800)' _hover={{bg: 'red.600'}} width={'130px'} type='button'><Link to="/">Shop Now</Link></Button>
            </div>
          </Box>
        </Flex>
        <Box width={{md: '47%', base: '100%'}} bg={{md: '', base: ''}} py={2} className='text-gray-800'>
          <Slider {...settings}>
            <Flex width={'full'}>
              <div className="h-[300px] flex justify-center items-center">
                <img src={laptop} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
            <Flex width={'full'}>
              <div className="h-[300px] flex justify-center items-center">
                <img src={img2} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
            <Flex width={'full'}>
              <div className="h-[300px] flex justify-center items-center">
                <img src={img3} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
            <Flex width={'full'}>
              <div className=" h-[300px] flex justify-center items-center">
                <img src={mobile} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
            <Flex width={'full'}>
              <div className="h-[300px] flex justify-center items-center">
                <img src={img4} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
          </Slider>
        </Box>
      </Flex>
    </section>
  )
}
