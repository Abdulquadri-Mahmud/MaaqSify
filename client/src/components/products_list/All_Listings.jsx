import { Box, Flex, Heading, ListIcon, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

export default function All_Listings() {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            const fetchListings = async () => {
                setLoading(true);

                const res = await fetch('/api/listing/all-listings');

                const data = await res.json();

                setListings(data);
                setLoading(false);
                setError(false);
            }

            fetchListings();

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);

    console.log(listings);
    
  return (
    <div className="">
        <div className="">
            <Link to={'/'}>
                <Text fontWeight={500} fontSize={16} my={5}>Men's Fashion </Text>
            </Link>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5'>
                {
                    listings.map((mens) => (
                        mens.category === "men's wear" ? (
                            <Box p={3} shadow={'md'} rounded={'md'} bg={'white'} key={mens._id} className=''>
                                <Flex justifyContent={'center'} className='relative'>
                                    <Link to={`/product-details/${mens._id}`}>
                                        <img src={mens.image[0]} alt={mens.name} className='max-w-full h-[150px] object-cover object-top'/>
                                    </Link>
                                    <div className="absolute bottom-0 right-0">
                                        <p className='text-red-500'>sv</p>
                                    </div>
                                </Flex>
                                <Box mt={3}>
                                    <Text isTruncated>{mens.name}</Text>
                                    <Text isTruncated>{mens.description}</Text>
                                </Box>
                                <Flex mt={3} justifyContent={'space-between'} alignItems={'center'}>
                                    <Text>${mens.price}</Text>
                                    <button className='w-8 h-8 rounded-full bg-gray-800 text-white flex justify-center items-center'><FaCartShopping/></button>
                                </Flex>
                            </Box>
                        ) : ''
                    ))
                }
        </div>
        {/* drop-shadow-[0_15px_15px_#0007] */}
        </div>
        <Box my={10}>
            <Link to={'/'}>
                <Text fontWeight={500} fontSize={16} my={5}>Women's Wear</Text>
            </Link>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                {
                    listings.map((mens) => (
                        mens.category === "women's wear" ? (
                            <Box p={3} shadow={'md'} rounded={'md'} key={mens._id} className='relative'>
                                <Flex justifyContent={'center'} className='relative'>
                                    <Link to={`/product-details/${mens._id}`}>
                                        <img src={mens.image[0]} alt={mens.name} className='max-w-full h-[150px] object-cover object-top'/>
                                    </Link>
                                    <div className="absolute bottom-0 right-0">
                                        <p className='text-red-500'>sv</p>
                                    </div>
                                </Flex>
                                <Box mt={3}>
                                    <Text isTruncated>{mens.name}</Text>
                                    <Text isTruncated>{mens.description}</Text>
                                </Box>
                                <Flex mt={3} justifyContent={'space-between'} alignItems={'center'}>
                                    <Text>${mens.price}</Text>
                                    <button className='w-8 h-8 rounded-full bg-gray-800 text-white flex justify-center items-center'><FaCartShopping/></button>
                                </Flex>
                            </Box>
                        ) : ''
                    ))
                }
            </div>
        </Box>
    </div>
  )
}
