import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product_Details() {
    const { proID } = useParams();

    console.log(proID);
    
    const [ details, setDetails] = useState();

    useEffect(() => {
        const fetchProId = async () => {
            const res = await fetch(`/api/listing/single-listings/${proID}`);

            const data = await res.json();

            setDetails(data);

        }; fetchProId();
    }, []);

    console.log(details);
    

  return (
    <Box my={30} mx={3}>
        {/* <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="">1</div>
            <div className="">2</div>
        </div> */}
        Product_Details
    </Box>
  )
}
