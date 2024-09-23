import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// images
// import side_banner from '/side_banner.jpg';
import side_banner2 from '/side_banner2.png';
import side_banner3 from '/side_banner3.jpg';
import side_banner4 from '/side_banner4.jpg';
import side_banner5 from '/side_banner1.jpg';

import banner1 from '/body_cream.jpg';
import banner2 from '/banner1.jpg';
import banner3 from '/banner.jpg';
import banner4 from '/home.jpeg';

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
        fade: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        waitForAnimate: false,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      
  return (
    <section className='pt-10 md:px-0 '>
      <Flex justifyContent={'center'} gap={3} className='flex-wrap' p={{md:0, base: 0}} maxW={{md: '90%'}} mx={'auto'}>
        <div className="xl:w-[60%] w-full">
          <Slider {...settings}>
            <div className="flex justify-center items-center w-full bg-slate-300">
              <img src={side_banner2} alt="" className='md:h-[410px] h-[200px] w-full' />
            </div>
            <div className=" relativeflex justify-center items-center w-full bg-slate-300">
              <img src={side_banner4} alt="" className='md:h-[410px] h-[200px] w-full' />
              <div className="absolute bottom-[10%] left-5 text-white font-medium">
                <Text fontSize={25}>Smart Choices For A Smatter Home</Text>
              </div>
            </div>
            <Box bgImage={side_banner3} bgRepeat={'no-repeat'} bgSize={'cover'} bgPos={'center'} className="flex md:h-[410px] h-[200px] justify-center items-center w-full bg_img bg-slate-300">
              <Flex justifyContent={'center'} alignItems={'center'} height={{md: '410px', base: '200px'}} className="text-white">
                <Box textAlign={'center'}>
                  <Heading fontWeight={500} fontSize={30} fontFamily={'cursive'}>WELCOME TO MAAQSIFY</Heading>
                  <p className=''>We are here to save you time and money</p>
                </Box>
              </Flex>
            </Box>
            <div className="flex justify-center items-center w-full bg-slate-300">
              <img src={side_banner5} alt="" className='md:h-[400px] h-[200px] w-full' />
            </div>
          </Slider>
        </div>
        <div className="xl:w-[35%] w-full flex gap-2 flex-wrap md:px-0 px-2">
          <div className="">
            <Link to={''}>
              <img src={banner1} alt="" className='xl:max-w-[200px] max-w-[100px]'/>
            </Link>
          </div>
          <div className="">
            <Link to={''}>
              <img src={banner2} alt="" className='xl:max-w-[200px] max-w-[100px]'/>
            </Link>
          </div>
          <div className="">
            <Link to={''}>
              <img src={banner3} alt="" className='xl:max-w-[200px] max-w-[100px]'/>
            </Link>
          </div>
          <div className="">
            <Link to={''}>
              <img src={banner4} alt="" className='xl:max-w-[200px] max-w-[100px]'/>
            </Link>
          </div>
        </div>
      </Flex>
    </section>
  )
}
