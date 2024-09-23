import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    Box,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react'
import { MdSearch } from 'react-icons/md';

export default function Search() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();

  return (
    <div>
        <p onClick={onOpen}><MdSearch/></p>
        <AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>Search For Products</AlertDialogHeader>
                <AlertDialogCloseButton />
                <form className="relative">
                    <AlertDialogBody>
                        <div className="pb-3 block md:hidden max-w-[100%] mx-auto">
                            <input type="text" placeholder='Search for products'  className='placeholder:text-white text-white bg-pink-500 font-semibold rounded-md border-none outline-none p-2 w-[100%]'/>
                        </div>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button bg={'pink.500'} color={'white'} ml={3}>
                            Search
                        </Button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}
