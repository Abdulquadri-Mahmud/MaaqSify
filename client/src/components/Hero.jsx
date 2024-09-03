import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// images
import laptop from '../assets/surface-laptop-studio.png';
import mobile from '../assets/Apple-Iphone.png';
import moyoduduza from '../assets/Print-Shirt1.png';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", 
          
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
        autoplaySpeed: 2500,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      
  return (
    <section>
      <Flex justifyContent={'center'} alignItems={'center'} my={{md: '7vh',}} className='flex-wrap'>
        <Flex justifyContent={'center'} alignItems={'center'} width={{md: '47%', base: '100%'}} bg={{md: 'gra', base: ''}} height={{md: '400px', base:'100%'}} py={10}>
          <Box>
            <Heading color={useColorModeValue({md: 'gray.800', base: 'black'})} fontWeight={500} fontSize={{md: '3rem', base:'2.5rem'}} className='pt-3 md:text-6xl text-4xl font-semibold text-center'>Get <span className="text-red-500">Start</span> <br/> Your <span className="text-red-500">Favorite</span> Shop<span className="text-red-500">ping</span></Heading>
            <Text color={useColorModeValue({md: 'gray.800', base: 'black'})} fontWeight={500} fontSize={{md: '1rem', base:'16'}} className='pt-3 text-xl font-semibold text-center'>Save more with coupons & up to 70% off!</Text>
            <div className="flex justify-center mt-5">
              <Button color={useColorModeValue('white', 'white')} bg={'red.500'} _hover={{bg: 'red.600'}} type='button'><Link to="/">Shop Now</Link></Button>
            </div>
          </Box>
        </Flex>
        <Box width={{md: '47%', base: '100%'}} bg={{md: 'white', base: ''}}>
          <Slider {...settings}>
            <Flex width={'full'}>
              <div className="h-[300px] flex justify-center items-center">
                <img src={laptop} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
            <Flex width={'full'}>
              <div className=" h-[300px] flex justify-center items-center">
                <img src={mobile} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
            <Flex width={'full'}>
              <div className="h-[300px] flex justify-center items-center">
                <img src={moyoduduza} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </Flex>
          </Slider>
        </Box>
      </Flex>
    </section>
  )
}
